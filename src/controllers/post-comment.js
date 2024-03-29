export default function makePostComment({ addComment}) {
    return async function postComment(httpRequest){
        try {
            const { source = {}, ...commentInfo} = httpRequest.body
            source.ip = httpRequest.ip
            source.browser = httpRequest.headers['User-Agent']

            const posted = await addComment({
                ...commentInfo,
                source
            })

            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 201,
                body: { posted }
            }


        } catch(e) {
            console.log(e)
            return {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode:400,
                body: {
                    error: e.message
                }
            }
        }

    }
}
