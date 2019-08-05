export default function buildMakeComment({ Id, makeSource}) {
    return function makeComment({
        author,
        createdOn = Date.now(),
        id = Id.makeID(),
        source,
        modifiedOn = Date.now(),
        postId,
        published = false,
        replyToId,
        text
    } = {}) {
        if (!Id.isValidId(id))
            throw new Error('Comment must have valid id.')

        if(!author)
            throw new Error('Comment must have error')

        if(!text || text.length < 1)
            throw new Error('Comment must include at least one character of text.')

        if(!source)
            throw new Error('Comment must have source.')

        const validSource = makeSource(source)
        const deletedText = 'This comment has been deleted.'

        return Object.freeze({
           getAuthor: () => author,
           getCreatedOn: () => createdOn,
           getHash: () => hash || (hash = makeHash()),
           getId: () => id,
           getModifiedOn: () => modifiedOn,
           getPostId: () => postId,
           getReplyToId: () => replyToId,
           getSource: () => validSource,
           getText: () => sanitizedText,
           isPublished: () => published,
           markDeleted: () => {
             author = 'deleted'
           },
           publish: () => {
             published = true
           },
           unPublish: () => {
             published = false
           }
         })
    }
}
