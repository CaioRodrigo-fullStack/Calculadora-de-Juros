import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Acesse: http://localhost:${PORT}`);
  console.log(
    `Rota para juros simples (POST): http://localhost:${PORT}/api/v1/interest/simple`
  );
  console.log(
    `Rota para juros compostos (POST): http://localhost:${PORT}/api/v1/interest/compound`
  );
});
