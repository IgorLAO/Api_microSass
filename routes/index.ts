
export default async (router: Router.Router): Promise<Router.Router> => {

    router.use('/',async (req, res, next) => {
        next()
    })

    return router
}