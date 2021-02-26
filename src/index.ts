import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (request, response) => {
    response.send("Home server");
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})
