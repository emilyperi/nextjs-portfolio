import remark from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

export async function markdownToString(markdown) {
    const result = matter(markdown);
    const processedContent = await remark()
        .use(html)
        .process(result.content);
    return processedContent.toString();
}

export async function getPost(slug) {
    const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
    const markdown = fs.readFileSync(filePath, 'utf8');
    const htmlContent = await markdownToHtml(markdown);
    return htmlContent;
}