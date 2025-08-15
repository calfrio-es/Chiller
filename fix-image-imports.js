const fs = require('fs');
const path = require('path');

// Función para procesar un archivo JSX
function fixImageImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Buscar patrones de rutas incorrectas
    const incorrectPatterns = [
      /src="\/src\/assets\/img\/layout\/([^"]+)"/g,
      /backgroundImage:\s*"url\('\/src\/assets\/img\/layout\/([^']+)'\)"/g,
      /backgroundImage:\s*"url\("\/src\/assets\/img\/layout\/([^"]+)"\)"/g
    ];
    
    // Obtener el directorio del archivo para calcular la ruta relativa
    const fileDir = path.dirname(filePath);
    const assetsPath = path.join(fileDir, 'assets', 'img', 'layout');
    
    // Verificar si el directorio de assets existe
    if (!fs.existsSync(assetsPath)) {
      console.log(`⚠️  Assets path not found for: ${filePath}`);
      return false;
    }
    
    // Procesar cada patrón
    incorrectPatterns.forEach((pattern, index) => {
      content = content.replace(pattern, (match, imageName) => {
        modified = true;
        
        // Calcular la ruta relativa desde el archivo actual hasta assets/img/layout
        const relativePath = path.relative(fileDir, 'src/assets/img/layout').replace(/\\/g, '/');
        
        if (index === 0) {
          // Para src="..."
          return `src="${relativePath}/${imageName}"`;
        } else {
          // Para backgroundImage
          return `backgroundImage: "url('${relativePath}/${imageName}')"`;
        }
      });
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Función para buscar archivos JSX recursivamente
function findJsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

// Ejecutar el script
console.log('🔍 Buscando archivos JSX con importaciones de imágenes incorrectas...');
const jsxFiles = findJsxFiles('./src');
let fixedCount = 0;

jsxFiles.forEach(file => {
  if (fixImageImports(file)) {
    fixedCount++;
  }
});

console.log(`\n🎉 Proceso completado! ${fixedCount} archivos corregidos.`);
