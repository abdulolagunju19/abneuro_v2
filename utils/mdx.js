//we can import fs as the functions in the file are called in getStaticProps
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = process.cwd()

export async function getFrontMatter (folder) {

  //get the files from the /data directory
  const files = fs.readdirSync(path.join(root, 'data', folder));

  //get the slugs and frontmatter
  const posts = files.map((file) => {

    //create the slug
    const slug = file.replace('.mdx', '');

    //get everything in the markdown file
    const metaMarkdownFile = fs.readFileSync(
      path.join('data', folder, file), 
      'utf-8'
    );
    
    //extract the frontmatter from the markdown file
    const { data: frontMatter } = matter(metaMarkdownFile);

    //return and object with frontmatter and slug
    return {
      ...frontMatter, 
      slug
    };
  })

  return posts;
}




