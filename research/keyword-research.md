## Project Overview  
Built a data-driven programmatic SEO site for a Pet content platform, a content hub focused on helping pet owners in Brazil make informed decisions across health, nutrition, care, and accessories. The project should leverag AI-driven keyword research and long-tail targeting to build a scalable content roadmap optimized for informational, transactional, and commercial search intent.

## Strategic Approach  

### 1. **Data-Driven Keyword Research**  
**Tool Used:** DataForSEO MCP via Smithery CLI  

**Prompt Injected via MCP:**  
```plaintext
You are an SEO strategist specializing in the Brazilian pet market.

Research using dataforSEO mcp and generate a list of the top 100 keywords in Portuguese that should be prioritized for content creation in the pet niche in Brazil.

✅ Constraints:
- Language: Portuguese (pt-BR)
- Geography: Brazil
- Search volume: Minimum 500 monthly searches
- Keyword difficulty: Preferably low or medium competition
- Search intent: Mix of informational, transactional, and commercial intent
- Content suitability: Focus on keywords that can generate relevant blog articles, listicles, comparison posts, tutorials, product reviews, or affiliate content.


Topic Clusters to cover (use as seed themes):
- Cuidados com cães e gatos
- Rações e alimentação
- Acessórios e brinquedos
- Banho e tosa
- Saúde e vacinação
- Adestramento e comportamento
- Nomes de pets
- Quanto custa ter um animal
- Pets exóticos ou menos comuns
- Tendências como “pet friendly” e “alimentação natural”


exclude list: cobasi, petz, petlove, petshop, petshopperto, petshopbanhoe, petshopabertos, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora, petshopriodejaneiro, petshoponline, petshop24horas, petshopabertosagora,


📊 For each keyword, return the following fields in a table:
1. Keyword
2. Monthly Search Volume (Brazil)
3. Keyword Difficulty (if available)
4. Search Intent (informational, transactional, commercial)
5. Suggested Content Type (ex: tutorial, review, listicle, guide, comparison)
6. Topic Cluster


add the results to @pet-market-keywords.md file