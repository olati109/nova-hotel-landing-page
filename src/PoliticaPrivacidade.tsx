import { Link } from "react-router-dom";

export default function PoliticaPrivacidade() {
  return (
    <div style={{ backgroundColor: "#F8F5EF", color: "#1A1815", minHeight: "100vh" }}>
      <div className="max-w-3xl mx-auto px-6 lg:px-14 py-24">
        <Link
          to="/"
          style={{ fontSize: "13px", letterSpacing: "0.15em", color: "#C4A882", textTransform: "uppercase" }}
        >
          ← Voltar para o início
        </Link>

        <h1 className="font-display" style={{ fontSize: "clamp(28px, 4vw, 44px)", marginTop: "24px", marginBottom: "32px" }}>
          Política de Privacidade e Cookies
        </h1>

        <p style={{ fontSize: "13px", color: "#7A7068", marginBottom: "32px" }}>
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#3A342C" }}>
          <p style={{ marginBottom: "20px" }}>
            Esta página é um modelo ilustrativo para o projeto fictício <strong>NOVA Hotel</strong>, criado
            como peça de portfólio. Em um site real, este texto deve ser revisado por um profissional
            jurídico e ajustado à operação real do hotel, em conformidade com a Lei Geral de Proteção de
            Dados (LGPD — Lei nº 13.709/2018).
          </p>

          <h2 className="font-display" style={{ fontSize: "22px", margin: "32px 0 12px" }}>1. Quais dados coletamos</h2>
          <p style={{ marginBottom: "20px" }}>
            Podemos coletar nome, telefone/WhatsApp, e-mail e datas de interesse informados em formulários de
            reserva ou contato, além de dados de navegação (páginas visitadas, tempo de permanência, origem
            do acesso) coletados automaticamente por cookies e ferramentas de análise, como Google Analytics,
            Google Tag Manager e Meta Pixel.
          </p>

          <h2 className="font-display" style={{ fontSize: "22px", margin: "32px 0 12px" }}>2. Para que usamos esses dados</h2>
          <p style={{ marginBottom: "20px" }}>
            Utilizamos essas informações para responder solicitações de reserva e contato, entender como os
            hóspedes em potencial usam o site, melhorar a experiência de navegação e, quando aplicável,
            exibir anúncios mais relevantes em plataformas como Meta (Facebook/Instagram) e Google.
          </p>

          <h2 className="font-display" style={{ fontSize: "22px", margin: "32px 0 12px" }}>3. Cookies</h2>
          <p style={{ marginBottom: "20px" }}>
            Cookies são pequenos arquivos armazenados no seu navegador. Usamos cookies próprios e de
            terceiros (Google, Meta) para lembrar preferências, medir audiência e mensurar a performance de
            campanhas. Você pode desativar os cookies nas configurações do seu navegador a qualquer momento,
            o que pode afetar algumas funcionalidades do site.
          </p>

          <h2 className="font-display" style={{ fontSize: "22px", margin: "32px 0 12px" }}>4. Compartilhamento de dados</h2>
          <p style={{ marginBottom: "20px" }}>
            Não vendemos dados pessoais. Dados de navegação podem ser compartilhados com provedores de
            análise e publicidade (Google, Meta) estritamente para as finalidades descritas acima.
          </p>

          <h2 className="font-display" style={{ fontSize: "22px", margin: "32px 0 12px" }}>5. Seus direitos</h2>
          <p style={{ marginBottom: "20px" }}>
            Você pode solicitar a qualquer momento a confirmação, o acesso, a correção ou a exclusão dos
            seus dados pessoais, entrando em contato pelos canais informados no site.
          </p>

          <h2 className="font-display" style={{ fontSize: "22px", margin: "32px 0 12px" }}>6. Contato</h2>
          <p style={{ marginBottom: "20px" }}>
            Dúvidas sobre esta política podem ser enviadas pelo canal de contato disponível na página
            inicial.
          </p>
        </div>
      </div>
    </div>
  );
}
