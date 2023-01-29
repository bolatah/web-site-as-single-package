import { Typography } from "@mui/material";

const Privacy = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h5" component="h2">
        Datenschutzerklärung
      </Typography>
      <Typography variant="h6" component="h3">
        Grundlegendes
      </Typography>
      <Typography variant="body1" paragraph>
        Diese Datenschutzerklärung soll die Nutzer dieser Website über die Art,
        den Umfang und den Zweck der Erhebung und Verwendung personenbezogener
        Daten durch den Websitebetreiber Ahmet Bolat informieren. Der
        Websitebetreiber nimmt Ihren Datenschutz sehr ernst und behandelt Ihre
        personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
        Vorschriften. Da durch neue Technologien und die ständige
        Weiterentwicklung dieser Webseite Änderungen an dieser
        Datenschutzerklärung vorgenommen werden können, empfehle ich Ihnen sich
        die Datenschutzerklärung in regelmäßigen Abständen wieder durchzulesen.
        Definitionen der verwendeten Begriffe (z.B. “personenbezogene Daten”
        oder “Verarbeitung”) finden Sie in Art. 4 DSGVO.
      </Typography>
      <Typography variant="h6" component="h3">
        Zugriffsdaten
      </Typography>
      <Typography variant="body1" paragraph>
        Ich, der Websitebetreiber bzw. Seitenprovider, erhebe aufgrund meines
        berechtigten Interesses (s. Art. 6 Abs. 1 lit. f. DSGVO) Daten über
        Zugriffe auf die Website und speichere diese als “Server-Logfiles” auf
        dem Server der Website ab. Folgende Daten werden so protokolliert:
        Besuchte Website, Uhrzeit zum Zeitpunkt des Zugriffes, Menge der
        gesendeten Daten in Byte, Quelle/Verweis, von welchem Sie auf die Seite
        gelangten, Verwendeter Browser, Verwendetes Betriebssystem, Verwendete
        IP-Adresse. Die Server-Logfiles werden für maximal 7 Tage gespeichert
        und anschließend gelöscht. Die Speicherung der Daten erfolgt aus
        Sicherheitsgründen, um z. B. Missbrauchsfälle aufklären zu können.
        Müssen Daten aus Beweisgründen aufgehoben werden, sind sie solange von
        der Löschung ausgenommen bis der Vorfall endgültig geklärt ist.
      </Typography>

      <Typography variant="h6" component="h3">
        Anfrage per E-Mail oder Telefon
      </Typography>
      <Typography variant="body1" paragraph>
        Wenn Sie mich per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
        Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
        (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei mir
        gespeichert und verarbeitet. Diese Daten gebe ich nicht ohne Ihre
        Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage
        von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
        eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
        Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
        Verarbeitung auf meinem berechtigten Interesse an der effektiven
        Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f
        DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern
        diese abgefragt wurde. Die von Ihnen an mich per Kontaktanfragen
        übersandten Daten verbleiben bei mir, bis Sie mich zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
        für die Datenspeicherung entfällt (z. B. nach abgeschlossener
        Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
        insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        Quelle:eRecht24
      </Typography>
    </div>
  );
};

export default Privacy;
