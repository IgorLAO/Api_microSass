import { kafka } from "@@/libs/kafka"
import { Kafka } from "kafkajs"

export default async (router: Router.Router): Promise<Router.Router> => {

    router.post('/', async (req, res) => {
        await kafka.producer.connect()

        await kafka.producer.send({
            topic: "demo",
            messages: [
                {
                    key: 'key',
                    value: JSON.stringify(req.body)
                },
            ],
        })
        
        return res.status(200).json({ok: true})
    })

    return router
}