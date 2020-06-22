-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: prueba_sigma
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ingrediente`
--

DROP TABLE IF EXISTS `ingrediente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingrediente` (
  `id_ingrediente` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_ingrediente`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingrediente`
--

LOCK TABLES `ingrediente` WRITE;
/*!40000 ALTER TABLE `ingrediente` DISABLE KEYS */;
INSERT INTO `ingrediente` VALUES (5,'Papa'),(6,'Aceite'),(7,'Pollo'),(10,'Huevos'),(14,'Espinaca'),(15,'Mantequilla sin sal');
/*!40000 ALTER TABLE `ingrediente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingrediente_receta`
--

DROP TABLE IF EXISTS `ingrediente_receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingrediente_receta` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_ingrediente` int NOT NULL,
  `id_receta` int NOT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_receta` (`id_receta`),
  KEY `id_ingrediente` (`id_ingrediente`),
  CONSTRAINT `ingrediente_receta_ibfk_1` FOREIGN KEY (`id_receta`) REFERENCES `receta` (`id_receta`),
  CONSTRAINT `ingrediente_receta_ibfk_2` FOREIGN KEY (`id_ingrediente`) REFERENCES `ingrediente` (`id_ingrediente`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingrediente_receta`
--

LOCK TABLES `ingrediente_receta` WRITE;
/*!40000 ALTER TABLE `ingrediente_receta` DISABLE KEYS */;
INSERT INTO `ingrediente_receta` VALUES (36,10,23,4),(37,5,23,6),(38,6,23,1);
/*!40000 ALTER TABLE `ingrediente_receta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paso`
--

DROP TABLE IF EXISTS `paso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paso` (
  `id_paso` int NOT NULL AUTO_INCREMENT,
  `descripcion` longtext,
  `id_receta` int NOT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  `numero_paso` int DEFAULT NULL,
  PRIMARY KEY (`id_paso`),
  KEY `id_receta` (`id_receta`),
  CONSTRAINT `paso_ibfk_1` FOREIGN KEY (`id_receta`) REFERENCES `receta` (`id_receta`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paso`
--

LOCK TABLES `paso` WRITE;
/*!40000 ALTER TABLE `paso` DISABLE KEYS */;
INSERT INTO `paso` VALUES (30,'Mezcla en un bol todos los ingredientes de la marinada: comino, pimentón, canela, ajo, pimienta, tomillo, sal, salsa perrins y el agua. Mézclalo todo con una cuchara hasta conseguir una consistencia cremosa.',23,'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2018/02/Ingredientes-pulled-pork.jpg',1),(31,'Para esta receta voy a utilizar la olla rápida, aunque también puedes utilizar una olla normal sin problemas. Échale un poquito de aceite y ponla a fuego medio-bajo. Cuando esté el aceite caliente coloca la pieza de carne de cerdo dentro y ve marcándola de forma que cada uno de sus lados queden sellados y dorados. Tardarás apenas 5 minutos.',23,'',3),(32,'Pinta la carne con esta mezcla con ayuda de un pincel de cocina, e idealmente ponla en un recipiente o bolsa en la nevera y déjala reposar al menos 8 horas (puedes hacer este paso y dejarla toda la noche en la nevera por ejemplo). Aún así, si no puedes dejarla reposar mucho tiempo, al menos 30 minutos para que se impregne un poco del sabor de las especias, pero lo ideal es una noche entera.',23,'https://cdn7.recetasdeescandalo.com/wp-content/uploads/2018/02/Carne-de-cerdo-marinada-con-especias.jpg',2),(33,'Retira la carne de la olla, y si han quedado restos de especias demasiado negros o tostados retíralos con papel de cocina con cuidado de no quemarte.',23,'',4),(34,'Añade agua y/o caldo de pollo hasta cubrir por completo la pieza de cerdo.\nPreparación en olla a presión: cierra la olla con la tapadera y, a partir de cuando salgan las dos anillas rojas, deja que se cocine 50 minutos (dependerá de la marca y tipo de la olla, pero si no es de las antiguas y lleva las dos señales, será este tiempo), y ve reduciendo el fuego conforme veas que la presión se mantiene. Cuando haya transcurrido el tiempo, aparta del fuego y deja que la presión se escape sola poco a poco. Cuando la válvula haya bajado del todo ya puedes abrir la olla.\nPreparación en olla normal: tapa la olla, sube el fuego para que llegue a ebullición y después bájalo para que se mantenga el agua borboteando pero muy suave. Deja que se cocine a fuego lento durante 5-7 horas, hasta que veas que la carne se desmiga sin problemas y está tierna. Al terminar deberás dejarla reposar media hora.',23,'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2018/02/Pulled-pork-en-olla-a-presion.jpg',7),(35,'Pela la cebolla, córtala en lunas y saltéala con un poquito de aceite en la olla durante apenas 3 minutos.',23,'',5),(36,'Coloca de nuevo la carne en la olla, encima de la cebolla',23,'https://cdn6.recetasdeescandalo.com/wp-content/uploads/2018/02/Pulled-pork-y-cebolla.jpg',6);
/*!40000 ALTER TABLE `paso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta`
--

DROP TABLE IF EXISTS `receta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta` (
  `id_receta` int NOT NULL AUTO_INCREMENT,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `nombre` varchar(100) DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  `descripcion` mediumtext,
  PRIMARY KEY (`id_receta`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta`
--

LOCK TABLES `receta` WRITE;
/*!40000 ALTER TABLE `receta` DISABLE KEYS */;
INSERT INTO `receta` VALUES (23,'2020-06-22 00:57:41','Pulled Pork','https://cdn7.recetasdeescandalo.com/wp-content/uploads/2018/02/Pulled-pork-o-cerdo-desmigado-al-estilo-americano-con-salsa-barbacoa-casera.jpg','Esta receta de pulled pork o cerdo desmigado al estilo americano con salsa barbacoa casera es una auténtica exquisitez. Con una cocción larga se consigue que la carne se pueda desmenuzar fácilmente y quede tierna, y condimentada con una marinada repleta de especias y nuestra salsa barbacoa casera, el resultado es de 10. Aunque se suele preparar en una olla normal u horno cocinando la carne durante muchas horas, hemos optado por la opción de olla a presión porque queda igualmente riquísima y se ahorra mucho tiempo.');
/*!40000 ALTER TABLE `receta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-21 22:02:33
