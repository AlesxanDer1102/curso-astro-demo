/* empty css                                    */
import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from '../../chunks/astro/server_DvB1WwkK.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Dv7h_tJ1.mjs';
export { renderers } from '../../renderers.mjs';

const html = "<h1 id=\"el-impacto-de-spacex-en-la-industria-aeroespacial\">El Impacto de SpaceX en la Industria Aeroespacial</h1>\n<p>Desde su fundación en 2002, <strong>SpaceX</strong> ha revolucionado la industria aeroespacial. Con su enfoque en la reutilización de cohetes y la reducción de costos, ha permitido que los vuelos espaciales sean más accesibles y sostenibles.</p>\n<h2 id=\"innovaciones-clave-de-spacex\">Innovaciones Clave de SpaceX</h2>\n<ol>\n<li><strong>Cohetes reutilizables</strong>: El Falcon 9 es el primer cohete que puede aterrizar y ser reutilizado, reduciendo significativamente los costos de lanzamiento.</li>\n<li><strong>Misiones tripuladas privadas</strong>: SpaceX ha transportado astronautas de la NASA al espacio, y su cápsula Dragon es pionera en misiones tripuladas comerciales.</li>\n<li><strong>Starlink</strong>: Una red global de satélites que busca proporcionar internet de alta velocidad en todo el mundo, especialmente en áreas remotas.</li>\n</ol>\n<h3 id=\"el-próximo-paso-colonización-de-marte\">El Próximo Paso: Colonización de Marte</h3>\n<p>El proyecto más ambicioso de SpaceX es llevar a la humanidad a <strong>Marte</strong>. Con su cohete Starship, la compañía espera hacer posibles los viajes interplanetarios, sentando las bases para una futura colonización. Elon Musk ha afirmado que la meta es hacer que la humanidad sea una especie multiplanetaria.</p>\n<blockquote>\n<p>“Convertirnos en una civilización multiplanetaria es el siguiente paso para asegurar el futuro de la humanidad.” – Elon Musk</p>\n</blockquote>\n<hr>\n<p><strong>Conclusión</strong>: SpaceX no solo ha transformado el acceso al espacio, sino que también está marcando el camino hacia un futuro en el que los viajes interplanetarios serán una realidad.</p>\n<hr>\n<p>Publicado por: <em>Diego Orrego Torrejon</em><br>\nFecha: <em>23 de octubre, 2024</em></p>";

				const frontmatter = {"title":"Contenido de la página","layout":"../../layouts/Layout.astro"};
				const file = "C:/Users/USER/OneDrive/Escritorio/WebApps/curso-astro-demo/src/pages/blog/mi-primer-blog.md";
				const url = "/blog/mi-primer-blog";
				function rawContent() {
					return "# El Impacto de SpaceX en la Industria Aeroespacial\r\n\r\nDesde su fundación en 2002, **SpaceX** ha revolucionado la industria aeroespacial. Con su enfoque en la reutilización de cohetes y la reducción de costos, ha permitido que los vuelos espaciales sean más accesibles y sostenibles.\r\n\r\n## Innovaciones Clave de SpaceX\r\n\r\n1. **Cohetes reutilizables**: El Falcon 9 es el primer cohete que puede aterrizar y ser reutilizado, reduciendo significativamente los costos de lanzamiento.\r\n2. **Misiones tripuladas privadas**: SpaceX ha transportado astronautas de la NASA al espacio, y su cápsula Dragon es pionera en misiones tripuladas comerciales.\r\n3. **Starlink**: Una red global de satélites que busca proporcionar internet de alta velocidad en todo el mundo, especialmente en áreas remotas.\r\n\r\n### El Próximo Paso: Colonización de Marte\r\n\r\nEl proyecto más ambicioso de SpaceX es llevar a la humanidad a **Marte**. Con su cohete Starship, la compañía espera hacer posibles los viajes interplanetarios, sentando las bases para una futura colonización. Elon Musk ha afirmado que la meta es hacer que la humanidad sea una especie multiplanetaria.\r\n\r\n> “Convertirnos en una civilización multiplanetaria es el siguiente paso para asegurar el futuro de la humanidad.” – Elon Musk\r\n\r\n---\r\n\r\n**Conclusión**: SpaceX no solo ha transformado el acceso al espacio, sino que también está marcando el camino hacia un futuro en el que los viajes interplanetarios serán una realidad.\r\n\r\n---\r\n\r\nPublicado por: _Diego Orrego Torrejon_  \r\nFecha: _23 de octubre, 2024_\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"el-impacto-de-spacex-en-la-industria-aeroespacial","text":"El Impacto de SpaceX en la Industria Aeroespacial"},{"depth":2,"slug":"innovaciones-clave-de-spacex","text":"Innovaciones Clave de SpaceX"},{"depth":3,"slug":"el-próximo-paso-colonización-de-marte","text":"El Próximo Paso: Colonización de Marte"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
