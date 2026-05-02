loopi:
    for (let i = 0; i < 10; i++) {
            loopk:
            for (let j = 0; j < 100; j++) {
                if (j > 10){
                    continue loopi;
                }
                console.info(`${i} - ${j}`);
            };
        
        };