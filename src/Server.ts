import App from "./Application";
import "dotenv/config";

const PORT = process.env.PORT || 2020;

App.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`))