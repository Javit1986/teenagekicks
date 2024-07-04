import express from "express";
import cors from "cors";
import { MercadoPagoConfig, Preference } from "mercadopago";

// Asegúrate de que has importado y configurado MercadoPago correctamente
const client = new MercadoPagoConfig({ accessToken: "TEST-6549381962373020-070417-cefcee9770811c83595d75d616ce021b-8496082" });

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("soy el server Gaspar");
});

app.post("/create_preference", async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity), // Asegúrate de que es un número
          unit_price: Number(req.body.price), // Asegúrate de que es un número
          currency_id: "ARS", // Corrección aquí
        },
      ],
      back_urls: {
        success: "https://www.instagram.com/teenagekickk/",
        failure: "https://www.instagram.com/teenagekickk/",
        pending: "https://www.instagram.com/teenagekickk/",
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({
      id: result.id,
    }); // Asegúrate de devolver el id correctamente
  } catch (error) {
    console.error("Error al crear preferencia:", error);
    res.status(500).json({ error: "Error al crear preferencia :(" });
  }
});

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`);
});
