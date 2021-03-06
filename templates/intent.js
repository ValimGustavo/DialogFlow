﻿﻿let res = {
    queryText: "eu gosto de futebol",
    parameters: {
        esportes: ["esportes"],
    },
    allRequiredParamsPresent: true,
    fulfillmentText:
        "Opa, legal, praticar esporte é uma ótima maneira de distração.",
    fulfillmentMessages: [
        {
            text: {
                text: [
                    'Opa, legal, praticar esporte é uma ótima maneira de distração.'
                ]
            }
        },
    ],
    outputContexts: [
        {
            name:
                "projects/positivinho-ucpbrk/agent/sessions/95aff1e6-77ba-50fd-9448-a2edf119c884/contexts/__system_counters__",
            parameters: {
                'no-input': 0,
                'no-match': 0,
                esportes: ['esportes'],
                'esportes.original': ['futebol']
            },
        },
    ],
    intent: {
        name:
            "projects/positivinho-ucpbrk/agent/intents/f4732230-ec90-48b1-a852-ca02bfab76e8",
        displayName: "Esportes",
    },
    intentDetectionConfidence: 0.71307766,
    languageCode: "pt-br",
};



