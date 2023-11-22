<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'Planty' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Ul:L,kgVj7@3|_kc`s:4Go|wUVfsKHc%z#4wLZg~X@Jp/Yl#2xZ_vx[<1:{@mN2u' );
define( 'SECURE_AUTH_KEY',  'fpT3t O Rw/;)B^D*1hXpfG%B@:dQtnD])kc&}bo_[ e=HQsG<vA&Z/&g<PgzM(r' );
define( 'LOGGED_IN_KEY',    '!-!M@I#P>)3->=_c_JZdS>Q6H0!DGJF]<tv$s84O~usGeE5:dC$tf$`8&etVCQT6' );
define( 'NONCE_KEY',        '7c:,(jJ,imCro2+&hfI~a-tw}_6M{9ZjW)}[c$TIICND{3k+CDYq)V*C[R[s,~K8' );
define( 'AUTH_SALT',        '2j.G+(tH1(4ujl;H%pgH`b~dG)M$_a6nQI49&%&HiOs1JZ)P{4dPZz(r*gpiineA' );
define( 'SECURE_AUTH_SALT', 'e{hWG@wXmC)}bq.z+B0@*C93Ve^XN@Q_n6-D_>ujb#3Q.m;ua[_gZ;4lQnE)IvRA' );
define( 'LOGGED_IN_SALT',   ']52x)`i0&tU:F~6Yl#oQ;CObpo[3H^qat2kyq=o0_*3bj|3*557mES*1P2z)qmLR' );
define( 'NONCE_SALT',       '!338ew.fZJOil2Qr=]P-<V 5 >M8`P<hx7p{gx(uH]UN2cO(JE*m+;byoZx.vkvN' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
