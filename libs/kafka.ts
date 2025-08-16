import { Kafka } from "kafkajs";

export namespace kafka{
    export const kafka = new Kafka({
        clientId: "my-api",
        brokers: ["localhost:9092"], // se for fora da VM, troca por IP/DNS público
    });

    export const producer = kafka.producer();

}
