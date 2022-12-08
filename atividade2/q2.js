
import fs from 'fs';

async function readdirDirectory(directory) {
    const arquivNames = await fs.promises.readdir(directory);
    for (let file of arquivNames) {
        const pathPrincipal = path.join(directory, file);
        console.log(pathPrincipal);
    }
}

readdirDirectory('./arquivo.md').then(() => {
    console.log("deu bom");
}).catch(err => {
    console.log(err);
});

// node .\atividade2\q2.js












// node .\atividade2\q2.js