import path from "path";
import fs from "fs";

export async function getStaticProps() {
    // Adjust the file path according to your project structure
    const filePath = path.join(process.cwd(), 'public', 'markdown', 'sample.md');
    const markdown = fs.readFileSync(filePath, 'utf8');

    // Return the markdown content as a prop
    return { props: { markdown } };
}