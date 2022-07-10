const router = require("express").Router();
const UMKM = require("../controllers/umkm");
router.get("/", UMKM.getView);
router.post("/", UMKM.saveProduct);
router.get("/:id", UMKM.getProductById);
router.patch("/:id", UMKM.updateProduct);
router.delete("/:id", UMKM.deleteProduct);

module.exports = router;
