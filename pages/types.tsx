export interface BookInfo {
    id: string,
    selfLink: string;
    volumeInfo: {
        title: string
        categories: []
        imageLinks: {
        smallThumbnail: string,
        thumbnail: string
        }
    }
    searchInfo: {
        textSnippet: string
    }
}