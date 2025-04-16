fetch('/LMSdata.csv').then((res)=>res.text()).then((data)=>{
    const results = Papa.parse(data, {
        header: false,
        dynamicTyping: true,
        skipEmptyLines: true
    });
    console.log(results.data);
});

//# sourceMappingURL=Chroma.1bc91bde.js.map
