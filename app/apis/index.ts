function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function fetchData1(): Promise<number[]> {
    await sleep(1000);
    return [0,1,2];
}


export async function fetchData2(id: number): Promise<{name: string}> {
    await sleep(1000);
    const data = [{name:"Jackson"}, {name:"Aiden"}, {name:"Ava"}];
    return data[id]
}