export const generateLinkFromTitle = (title: string) => {
    return `/test_task/note/${title.replace(/\s+/g, '-')}`;
};