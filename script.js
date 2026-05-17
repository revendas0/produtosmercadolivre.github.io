const produtos = [
    {
        nome: 'Computador Gamer Intel Core i7 16GB SSD 512GB',
        preco: 'R$ 1.868',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_988423-MLA100007094971_122025-F.webp',
        link: 'https://meli.la/2NhixEq'
    },

    {
        nome: 'Notebook Asus Vivobook 15 Intel Core i5',
        preco: 'R$ 3.078',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_874192-MLA99597035710_122025-F.webp',
        link: 'https://meli.la/1PEsqeY'
    },

    {
        nome: 'Computador Completo Intel Core i5 16GB SSD',
        preco: 'R$ 1.635',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_947438-MLA109935568933_042026-F.webp',
        link: 'https://meli.la/2i32B5x'
    },

    {
        nome: 'Placa-mãe Asus AMD AM4 B550M',
        preco: 'R$ 797',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_666926-MLA99989580013_112025-F.webp',
        link: 'https://meli.la/1fAiqeS'
    },

    {
        nome: 'Monitor LG UltraGear 24 144Hz',
        preco: 'R$ 679',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_685909-MLA101438581463_122025-F.webp',
        link: 'https://meli.la/1JtZZra'
    },

    {
        nome: 'Celular Samsung Galaxy A07 128gb Preto',
        preco: 'R$ 589',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_678247-MLA99491753898_112025-F.webp',
        link: 'https://meli.la/1wKJAA7'
    },

    {
        nome: 'Celular Samsung Galaxy A17 Com Ia, 256gb, 8gb Ram, Câm De 50mp, Tela De 6.7, Nfc, Ip54 - Azul',
        preco: 'R$ 1.079',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_889169-MLA96868779849_102025-F.webp',
        link: 'https://meli.la/16sZK3R'
    },

    {
        nome: 'Smartphone Motorola Moto G06 - 128gb 12gb (4gb Ram + 8gb Ram Boost) E Camera 50mp Com Ai Bateria De 5200 Mah Tela 6.9',
        preco: 'R$ 661',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_689704-MLA96194618638_102025-F.webp',
        link: 'https://meli.la/2btMiuq'
    },

    {
        nome: 'Smartphone Motorola Moto G35 5G - 128GB 12GB (4GB RAM+8GB Ram Boost) e Camera 50MP com AI NFC Tela 6.7 com Superbrilho - Verde - Vegan Leather',
        preco: 'R$ 844',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_983786-MLA99479656582_112025-F.webp',
        link: 'https://meli.la/231iM6k'
    },

    {
        nome: 'Celular Samsung Galaxy S25 Fe 5g, 128gb, 8gb Ram, Câmera Tripla De 50+12+8, Tela Grande De 6.7 Azul Marinho',
        preco: 'R$ 2.616',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_993303-MLA96666133268_112025-F.webp',
        link: 'https://meli.la/1xWx8jY'
    },

    {
        nome: 'Xiaomi Redmi 15c 16gb Ram 256gb Dual Sim 50mp Orange Fm Impressão digital',
        preco: 'R$ 1.137',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_827696-MLA99926487909_112025-F.webp',
        link: 'https://meli.la/1hK5AM9'
    },

    {
        nome: 'Celular Samsung Galaxy A26 5g 256gb, 8gb Ram, Câmera De 50mp, Ip67, Tela Super Amoled 6.7, Nfc - Branco',
        preco: 'R$ 1.989',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_657456-MLA100074445249_122025-F.webp',
        link: 'https://meli.la/2QbdJsf'
    },

    {
        nome: 'Xiaomi Redmi Note 15 Pro 5g 512gb 8gb Ram C/nfc Prova Dágua',
        preco: 'R$ 3.199',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_663335-MLB109722121301_032026-F.webp',
        link: 'https://meli.la/1DLY7jn'
    },

    {
        nome: 'Xiaomi Redmi Note 15 Dual Sim 256gb 8gb Ram+brind Verde-claro',
        preco: 'R$ 1.628',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_833194-MLB108377367645_032026-F.webp',
        link: 'https://meli.la/17ZugXc'
    },

    {
        nome: 'Xiaomi Redmi 15c 256gb 8gb Ram Dual Sim Capa E Pelicula',
        preco: 'R$ 1.217',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_736406-MLB96611211116_112025-F-xiaomi-redmi-15c-256gb-8gb-ram-dual-sim-capa-e-pelicula.webp',
        link: 'https://meli.la/2yPPb2K'
    },

    {
        nome: 'Controle Sem Fio Joystick Bluetooth Para Ps4 Videogame Tv Samsung Pc P4 Ps 4 Dual Shock Manete Pc Gamer Tv Smart Controle Bluetooth Celular Headset Sem Fio Com P2 - Marca Redfin',
        preco: 'R$ 54',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_762912-MLA105696431793_012026-F.webp',
        link: 'https://meli.la/15ZBJB3'
    },

    {
        nome: 'Controle Sem Fio Microsoft Xbox Series X|S Robot White',
        preco: 'R$ 369',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_728660-MLA100008487997_122025-F.webp',
        link: 'https://meli.la/2jiGZVN'
    },

    {
        nome: 'Notebook Positivo Vision C14 Lumina BAR Celeron 4GB 128GB eMMC Tela 14 Polegadas HD Antirreflexo Windows 11 Tecla Link Cinza',
        preco: 'R$ 1.704',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_950949-MLA109211558996_042026-F.webp',
        link: 'https://meli.la/2MtuYoK'
    },

    {
        nome: 'Capacete Robocop Escamoteável Fechado Mixs Gladiator Delta S Cor Cinza Azul Fosco Tamanho do capacete 56',
        preco: 'R$ 279',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_802513-MLA99433385260_112025-F.webp',
        link: 'https://meli.la/2K5gKLi'
    },

    {
        nome: 'Notebook ASUS Vivobook Go 15 E1504 AMD RYZEN 5 7520U 8GB Ram 256GB SSD Linux KeepOS 15,6” FHD Black E1504FA-NJ731',
        preco: 'R$ 3.203',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_830301-MLA99949667885_112025-F.webp',
        link: 'https://meli.la/2Nc3H4J'
    },

    {
        nome: 'Capacete Aberto Pro Tork New Liberty Three 56 Vermelho',
        preco: 'R$ 118',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_986818-MLA101180258908_122025-F.webp',
        link: 'https://meli.la/1xEX5Er'
    },

    {
        nome: 'Limpador De Para Brisa Dianteiro Palheta Original Bosch Par',
        preco: 'R$ 78',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_897063-MLB90108837635_082025-F-limpador-de-para-brisa-dianteiro-palheta-original-bosch-par.webp',
        link: 'https://meli.la/1cYJCE8'
    },

    {
        nome: 'Luva X11 Blackout 2 Motoqueiro Moto Motociclista Proteção Tamanho P',
        preco: 'R$ 85',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_916852-MLA99419859238_112025-F.webp',
        link: 'https://meli.la/1t6ZKEY'
    },

    {
        nome: 'Capa Para Moto Forrada Impermeável Térmica Sol Chuva',
        preco: 'R$ 49',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_995296-MLB98478624363_112025-F-capa-para-moto-forrada-impermeavel-termica-sol-chuva.webp',
        link: 'https://meli.la/2NGFenw'
    },

    {
        nome: 'Eps-2592 Fone De Ouvido De Capacete Moto Bluetrooth Controle De Voz',
        preco: 'R$ 37',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_865227-MLA96869958161_102025-F.webp',
        link: 'https://meli.la/2fKjb94'
    },

    {
        nome: 'Capacete para moto integral Pro Tork New Liberty R8 preto-fosco fosco tamanho 58',
        preco: 'R$ 137',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_766425-MLA99831715985_112025-F.webp',
        link: 'https://meli.la/2JXh3DX'
    },

    {
        nome: 'Pipoqueira Elétrica Popflix Pp-04 Ar Quente Cor Branco Mondial 127 V',
        preco: 'R$ 151',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_901579-MLA95658002232_102025-F.webp',
        link: 'https://meli.la/2vBLE9K'
    },

    {
        nome: 'Carregador Compativel Com iPhone 8 X Xr 11 12 13 14 Pro Max Turbo Fonte Tipo C Boyu Cell',
        preco: 'R$ 28',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_945381-MLA108251647129_032026-F.webp',
        link: 'https://meli.la/1YERV7R'
    },

    {
        nome: 'Carregador Celular Turbo 40w Usb-c Pd Dupla Entrada',
        preco: 'R$ 29',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_645473-MLB110696573737_042026-F.webp',
        link: 'https://meli.la/1xsomde'
    },

    {
        nome: 'Carregador Para Celular 120w Compatível Para Xiaomi Redmi Mi',
        preco: 'R$ 29',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_902786-MLB103725101616_012026-F.webp',
        link: 'https://meli.la/2NdTVbk'
    },

    {
        nome: 'Suporte Para Celular Bike Moto Gps Universal Le-024',
        preco: 'R$ 22',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_903035-MLA99880764981_112025-F.webp',
        link: 'https://meli.la/28nCJ3b'
    },

    {
        nome: 'Kit Chaves Ferramentas Jogo Fenda Philips Catraca Soquete Allen 46 Peças com Maleta Completa Manual Ideal Mecânico Manutenção Casa Carro Profissional Resistente Portátil Compacto Quicko',
        preco: 'R$ 26',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_987853-MLA109863820220_042026-F.webp',
        link: 'https://meli.la/1Rb37qL'
    },

    {
        nome: 'Jogo estojo ferramentas kit 27 cor verde Embralumi',
        preco: 'R$ 78',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_896086-MLA99951219219_112025-F.webp',
        link: 'https://meli.la/1cJWP8W'
    },

    {
        nome: 'Fogão Itatiaia Waves 6Q com Porta com Visor Branco',
        preco: 'R$ 1.019 ',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_631897-MLA100071696607_122025-F.webp',
        link: 'https://meli.la/2oNLXoT'
    },

    {
        nome: 'Mochila Grande Alça Reforçada Resistente Faculdade Trabalho',
        preco: 'R$ 44',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_812719-MLB92851761813_092025-F-mochila-grande-alca-reforcada-resistente-faculdade-trabalho.webp',
        link: 'https://meli.la/1SdYh4g'
    },

    {
        nome: 'Camiseta Masculina Reserva Básica 100% Algodão Casual',
        preco: 'R$ 36',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_991559-MLB93333966800_092025-F-camiseta-masculina-reserva-basica-100-algodo-casual.webp',
        link: 'https://meli.la/1c31ZWq'
    },

    {
        nome: 'Camiseta Básica Masculina Slim Koenig 100% Algodão Atacado',
        preco: 'R$ 33',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_797538-MLB98163310072_112025-F-camiseta-basica-masculina-slim-koenig-100-algodo-atacado.webp',
        link: 'https://meli.la/1qZGsDR'
    },

    {
        nome: 'Cooktop Itatiaia Essencial 5 Bocas Preto',
        preco: 'R$ 397',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_714775-MLA99507479710_112025-F.webp',
        link: 'https://meli.la/1SJSuMF'
    },

    {
        nome: 'Cooktop Philco Cook Chef 5 Cor Preto',
        preco: 'R$ 429',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_993783-MLA100001154819_112025-F.webp',
        link: 'https://meli.la/1dfcdvV'
    },

    {
        nome: 'Massageador Pistola Elétrica Profissional Muscular Portátil Aparelho Fisioterapia Corporal, 6 Velocidades 4 Cabeças De Massagem - Micgeek',
        preco: 'R$ 37',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_669249-MLA111531536853_052026-F.webp',
        link: 'https://meli.la/1VnFR4F'
    },

    {
        nome: 'Varal De Chão Grande De Roupas 3 Andares Dobrável Cor Azul Kontuz 170 cm',
        preco: 'R$ 74',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_712866-MLA109482654866_042026-F.webp',
        link: 'https://meli.la/15wvozc'
    },

    {
        nome: 'Máquina De Acabamento Corta Cabelo Profissional Kemei 2299 P',
        preco: 'R$ 78',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_982596-MLB100956707906_122025-F.webp',
        link: 'https://meli.la/1nd6FNJ'
    },

    {
        nome: 'Churrasqueira Elétrica De Mesa Elgin 42CHU2001000 Cor Preta',
        preco: 'R$ 74',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_617315-MLA99518517524_112025-F.webp',
        link: 'https://meli.la/1kYunSe'
    },

    {
        nome: 'Balança Digital De Precisão 10kg Davely Cook Cozinha Para Uso Domestico E Profissional Fitness Ideal Para Dietas Treinos Alimentos Confeitaria Nutrição Branco',
        preco: 'R$ 18',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_977172-MLA107049793514_022026-F.webp',
        link: 'https://meli.la/1Ja2cNP'
    },

    {
        nome: 'Balança Digital Bioimpedância Bluetooth Corporal Aparelho Alta Capacidade App para Android e para IOS Cor Preto Balança De Banheiro Academia - RHEAD RED HIGH END STUDIOS',
        preco: 'R$ 29',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_907836-MLA110261906562_052026-F.webp',
        link: 'https://meli.la/2qsu9TR'
    },

    {
        nome: 'Console Playstation®5 Slim Disk - Pacote Astro Bot E Gran Turismo 7 Branco',
        preco: 'R$ 4.230',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_945456-MLA99456386724_112025-F.webp',
        link: 'https://meli.la/1K3u9P9'
    },

    {
        nome: 'Kit Com 48 Pacotes de Figurinhas Panini Para o Álbum Copa do Mundo FIFA 2026',
        preco: 'R$ 321',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_979288-MLA109171693698_042026-F.webp',
        link: 'https://meli.la/1xKv2eg'
    },

    {
        nome: 'Álbum De Figurinhas Colecionáveis Copa Do Mundo Fifa 2026',
        preco: 'R$ 39',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_732835-MLB110559499954_052026-F.webp',
        link: 'https://meli.la/2ZLUhtb'
    },

    {
        nome: 'Vittak Lixeira Inox C/ Pedal E Balde Cesto Lixo Removível 12l Banheiro Cozinha',
        preco: 'R$ 78',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_970713-MLA110584208884_052026-F.webp',
        link: 'https://meli.la/2b7Liri'
    },

    {
        nome: 'Adaptador Receptor Bluetooth Usb Carro Musica Chamada S/fio Hrebos',
        preco: 'R$ 34',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_866885-MLA99927000353_112025-F.webp',
        link: 'https://meli.la/2gfj6BW'
    },

    {
        nome: 'Aspirador De Pó Vertical Wap Power Speed Max 1600w',
        preco: 'R$ 244',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_773776-MLA106648864819_022026-F.webp',
        link: 'https://meli.la/2nhmXSG'
    },

    {
        nome: 'Escada Alumínio 4 Degraus MOR Prateado/Azul',
        preco: 'R$ 199',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_985486-MLA96868217701_102025-F.webp',
        link: 'https://meli.la/2pmwuDH'
    },

    {
        nome: 'Pasta Termica Seringa 3.0g Thermal Cold 7.5w/k Authentic Silver',
        preco: 'R$ 20',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_947884-MLA108302766245_032026-F.webp',
        link: 'https://meli.la/2p6dyFY'
    },

    {
        nome: 'Cafeteira Elétrica Electrolux Jarra vidro, acabamento inox filtro Permanente Removível Sistema Corta Pingos Capacidade 15 xicaras 600ml ECM10',
        preco: 'R$ 109',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_923263-MLA99474168604_112025-F.webp',
        link: 'https://meli.la/2kqe4Sb'
    },

    {
        nome: 'Campainha Sem Fio Intelbras CIB 101 Preta',
        preco: 'R$ 66',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_632697-MLA100063596197_122025-F.webp',
        link: 'https://meli.la/1XAhNw4'
    },

    {
        nome: 'Cadeira Escritório Business Ajuste Lombar Encosto De Cabeça Preto',
        preco: 'R$ 275',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_704111-MLA106237281392_022026-F.webp',
        link: 'https://meli.la/19Cu7AA'
    },

    {
        nome: 'Mini Mixer Misturador De Bebidas Elétrico 2 Em 1 Portátil Recarregável Mexedor De Ovos Whey Leite Café Espuma Shake Drinks Capuccino Suco Comica',
        preco: 'R$ 22',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_743322-MLA111524055041_052026-F.webp',
        link: 'https://meli.la/2dHwDjg'
    },

    {
        nome: 'Porta Temperos Condimentos Giratório Kit 12 Potes De Vidro Com Tampa Dosadora 3 Regulagens Preto Quadrado Bravli',
        preco: 'R$ 42',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_776809-MLA106759673848_022026-F.webp',
        link: 'https://meli.la/1YnEMc1'
    },

    {
        nome: 'Fogão Fogareiro Frontier Camping Flex Gás Acendedor Automático',
        preco: 'R$ 78',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_834080-MLB99220007438_112025-F.webp',
        link: 'https://meli.la/2xsUS77'
    },

    {
        nome: 'Pendrive Twist preto 64gb multilaser modelo PD590',
        preco: 'R$ 51',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_669050-MLA99600326652_122025-F.webp',
        link: 'https://meli.la/1xukZpt'
    },

    {
        nome: 'Controle Para Xbox Qat-00007 Sem Fio Carbon Preto Microsoft',
        preco: 'R$ 379',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_896180-MLA109623421782_042026-F.webp',
        link: 'https://meli.la/1o7DPEa'
    },

    {
        nome: 'Mini Compressor Bomba Encher Pneu Carro Bicicleta Moto Eletrica Bola Portatil Digital',
        preco: 'R$ 74',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_616134-MLA110347001872_052026-F.webp',
        link: 'https://meli.la/2T8hu2a'
    },

    {
        nome: 'Grill Sanduicheira Cadence SAN400 Elétrica Chapa Misteira Tostex Tostequeira Hambúrguer Click',
        preco: 'R$ 98',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_901582-MLA84838790809_052025-F.webp',
        link: 'https://meli.la/1FFqNaq'
    },

    {
        nome: 'Liquidificador Turbo Power Mondial 550W - L-99 FB',
        preco: 'R$ 99',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_744049-MLA99539379058_122025-F.webp',
        link: 'https://meli.la/1AgcsGc'
    },

    {
        nome: 'Liquidificador Agratto Turbo 15 de 1200W e 3.2 Litros Preto',
        preco: 'R$ 259',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_793514-MLA105752656797_012026-F.webp',
        link: 'https://meli.la/2aye3Eo'
    },

    {
        nome: 'Chaleira Eletrica Atacama 1,8l - Unitermi',
        preco: 'R$ 43',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_965103-MLA99575749404_122025-F.webp',
        link: 'https://meli.la/313K5Hg'
    },

    {
        nome: 'Aspirador De Pó Vertical E Portátil Wap High Speed Plus 1350w 1,2 Litros Filtro Hepa Tecnologia Cyclone 3 Em 1',
        preco: 'R$ 151',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_988762-MLA99599448802_122025-F.webp',
        link: 'https://meli.la/2LkoDyo'
    },

    {
        nome: 'Mixer De Mão Portátil 8 Velocidades 3 Em 1 Inox 800w Kookin KNHB1008 Multifuncional Com Função Turbo E Lâminas Aprimoradas 2 Afiadas + 2 Reforçadas Em Aço Inox 304',
        preco: 'R$ 165',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_751457-MLA96190877768_102025-F.webp',
        link: 'https://meli.la/2t7CqoT'
    },

    {
        nome: 'Mixer Vertical Turbo Chef Elgin 3 Em 1 200w Preto 110v Preto',
        preco: 'R$ 99',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_651826-MLA99986263335_112025-F.webp',
        link: 'https://meli.la/27HtRQ8'
    },

    {
        nome: 'Aa Mini Processador Liquidificador Portátil 400ml Alta',
        preco: 'R$ 68',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_863637-CBT97910753310_112025-F.webp',
        link: 'https://meli.la/2Wr8EY6'
    },

    {
        nome: 'Celular Samsung Galaxy A17 5g Com Ia, 128gb, 4gb Ram, Câm De 50mp, Tela De 6.7 , Nfc, Ip54 - Preto',
        preco: 'R$ 864',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_755351-MLA99597188918_122025-F.webp',
        link: 'https://meli.la/2TCXRwr'
    },

    {
        nome: 'Parafusadeira Furadeira C/ 2 Baterias Maleta Kit Completo Led Eixo Flexível Vários Níveis Torque',
        preco: 'R$ 125',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_828436-MLA100007265481_122025-F.webp',
        link: 'https://meli.la/1pZwhe7'
    },

    {
        nome: 'Parafusadeira Furadeira De Impacto The Black Tools Profissional TB-21PX 2 Baterias Com Maleta 60Hz Amarelo',
        preco: 'R$ 169',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_865332-MLA96868279679_102025-F.webp',
        link: 'https://meli.la/2UAzJKV'
    },

    {
        nome: 'Esmerilhadeira angular Bosch Professional GWS 700 azul 710 W',
        preco: 'R$ 242',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_670719-MLA99986706915_112025-F.webp',
        link: 'https://meli.la/2yUMvVH'
    },

    {
        nome: 'Lavadora de Alta Pressão Compacta WAP WL 1800 1400W 1500PSI 360L/h 220V',
        preco: 'R$ 299',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_969245-MLA99639655414_122025-F.webp',
        link: 'https://meli.la/2Q5nrAA'
    },

    {
        nome: 'Smartphone Galaxy A01 32gb 2gb Ram Preto Samsung (Novo com caixa aberta)',
        preco: 'R$ 899',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_940230-MLA99447788056_112025-F.webp',
        link: 'https://meli.la/2HuYYb9'
    },

    {
        nome: 'Smartphone Samsung Galaxy A01 Core Tela 5.3 32gb 2gb Ram Pto Cor Preto',
        preco: 'R$ 799',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_945135-MLA99547847748_122025-F.webp',
        link: 'https://meli.la/2t9ddE4'
    },

    {
        nome: 'Samsung Galaxy A02 32 GB preto 2 GB RAM',
        preco: 'R$ 759',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_905088-MLA95844868297_102025-F.webp',
        link: 'https://meli.la/2SEVt9Q'
    },

    {
        nome: 'Smartphone Samsung Galaxy A02s Tela 6.5 32gb 3gb Ram Azul',
        preco: 'R$ 739',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_964976-MLA95838780167_102025-F.webp',
        link: 'https://meli.la/2WGj2CP'
    },

    {
        nome: 'Smartphone Samsung Galaxy A02 Tela 6.5 32gb 2gb Ram Azul',
        preco: 'R$ 699',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_982399-MLA95970018169_102025-F.webp',
        link: 'https://meli.la/2N2kmuu'
    },

    {
        nome: 'Carregador Turbo Compatível Samsung A10 A01 A02 A03 J7 J8 S7 Branco',
        preco: 'R$ 19',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_629848-MLA106634001996_022026-F.webp',
        link: 'https://meli.la/2vgNbZz'
    },

    {
        nome: 'Carregador Turbo Compatível Samsung A10 A01 A02 A03 J7 J8 S7',
        preco: 'R$ 20',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_896912-MLB78932082414_092024-F-carregador-turbo-compativel-samsung-a10-a01-a02-a03-j7-j8-s7.webp',
        link: 'https://meli.la/1e8BHP9'
    },

    {
        nome: 'Samsung Galaxy A03 Core Dual SIM 32 GB Preto 2 GB RAM',
        preco: 'R$ 573',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_627878-MLA96100938673_102025-F.webp',
        link: 'https://meli.la/1JRxdfM'
    },

    {
        nome: 'Samsung Galaxy A03 Dual SIM 64GB Preto 4GB RAM',
        preco: 'R$ 677',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_765685-MLA95699791604_102025-F.webp',
        link: 'https://meli.la/1UJxoAM'
    },

    {
        nome: 'Smartphone Samsung Galaxy A03 Core 32gb 2gb Cobre Cor Bronze (Novo com caixa aberta)',
        preco: 'R$ 542',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_989204-MLA99991947505_112025-F.webp',
        link: 'https://meli.la/2xcwSaK'
    },

    {
        nome: 'Samsung Galaxy A05 Dual SIM 128 GB Preto 4 GB RAM',
        preco: 'R$ 921',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_993702-MLA99509488682_112025-F.webp',
        link: 'https://meli.la/1eZZJgX'
    },

    {
        nome: 'Samsung Galaxy A05 Dual SIM 128 GB verde 4 GB RAM (Novo com caixa aberta)',
        preco: 'R$ 646',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_931644-MLA99990299313_112025-F.webp',
        link: 'https://meli.la/1bbmqQy'
    },

    {
        nome: 'Samsung Galaxy A06 5g Dual Sim 128gb preto',
        preco: 'R$ 612',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_716412-MLA99524473372_122025-F.webp',
        link: 'https://meli.la/2UkERwM'
    },

    {
        nome: 'Smartphone Samsung Galaxy A06 4G 128GB 4GB RAM Dual Chip Câmera Traseira 50+2MP Frontal 8MP Tela 6,7" Android 14.0 Azul Escuro',
        preco: 'R$ 750',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_881900-MLA100064086561_122025-F.webp',
        link: 'https://meli.la/1dNcuQm'
    },

    {
        nome: 'Samsung Galaxy A06 5g 64gb - 4gb Dual Black Black',
        preco: 'R$ 678',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_744918-MLA103344866033_012026-F.webp',
        link: 'https://meli.la/1MQgP3q'
    },

    {
        nome: 'Celular Samsung Galaxy A06 4gb Ram 128gb 4g A06m Cor Branco',
        preco: 'R$ 829',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_987474-MLA99904759503_112025-F.webp',
        link: 'https://meli.la/1pQQdeA'
    },

    {
        nome: 'Celular Samsung Galaxy A07 256gb 8gb Câmera 50mp Verde',
        preco: 'R$ 763',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_778917-MLA91526601104_092025-F.webp',
        link: 'https://meli.la/1UPshn2'
    },

    {
        nome: 'Celular Samsung Galaxy A07 256gb, 8gb, Câmera 50mp, Tela 6.7 , Proteção Ip54, Processador 6nm - Preto (Novo com caixa aberta)',
        preco: 'R$ 1.172',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_895724-MLA91526198522_092025-F.webp',
        link: 'https://meli.la/16WHADE'
    },

    {
        nome: 'Smartphone Galaxy A07, 128gb, Tela 6.7 , Verde Verde',
        preco: 'R$ 656',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_715477-MLA108553364167_032026-F.webp',
        link: 'https://meli.la/2pXBgnF'
    },

    {
        nome: 'Jogo Jacaré Mordida Crocodilo Dentista BDivertido Pegadinha',
        preco: 'R$ 19',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_984527-MLA99567099290_122025-F.webp',
        link: 'https://meli.la/1yyrBLu'
    },

    {
        nome: 'Celular Samsung Galaxy A07 256gb, 8gb, Câmera 50mp, Tela 6.7 , Proteção Ip54, Processador 6nm - Preto',
        preco: 'R$ 822',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_895724-MLA91526198522_092025-F.webp',
        link: 'https://meli.la/2xVf3bs'
    },

    {
        nome: 'Celular Samsung Galaxy A07 128gb, 4gb, Câmera 50mp, Tela 6.7 , Proteção Ip54, Processador 6nm - Verde',
        preco: 'R$ 596',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_712741-MLA96423997982_102025-F.webp',
        link: 'https://meli.la/2Bgveqz'
    },

    {
        nome: 'Smartphone Samsung Galaxy A11 Tl 6.4 64gb 3gb Ram Azul',
        preco: 'R$ 949',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_810547-MLA95842929191_102025-F.webp',
        link: 'https://meli.la/2oL89Af'
    },

    {
        nome: 'Smartphone Samsung Galaxy A11 64gb, 3gb, 6.4 4g (Recondicionado)',
        preco: 'R$ 669',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_885432-MLB70310657371_072023-F.webp',
        link: 'https://meli.la/2LoMWFk'
    },

    {
        nome: 'Pulseira Dos Namorados Amigos Irmaos Yin Yang Thai Chi Casal',
        preco: 'R$ 25',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_731263-MLB91442504605_092025-F.webp',
        link: 'https://meli.la/2eomiwM'
    },

    {
        nome: 'Conjunto De 5 Colares Da Kuromi Sanrio: Coleção Amizade',
        preco: 'R$ 26',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_988030-CBT108560068516_032026-F.webp',
        link: 'https://meli.la/1pTX3AK'
    },

    {
        nome: 'Colar Com Pingente Em Formato De Coração Para Casal',
        preco: 'R$ 35',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_978855-CBT110113648036_042026-F-colar-com-pingente-em-formato-de-coraco-para-casal.webp',
        link: 'https://meli.la/2wJT5Vg'
    },

    {
        nome: 'Samsung Galaxy SM-A125M Dual SIM 64 GB branco 4 GB RAM',
        preco: 'R$ 1.019',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_978247-MLA95691979628_102025-F.webp',
        link: 'https://meli.la/32xm2h6'
    },

    {
        nome: 'Smartphone Samsung Galaxy A12 Tela 6,5 64gb 4gb Ram Vermelho',
        preco: 'R$ 949',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_997152-MLA99993750399_112025-F.webp',
        link: 'https://meli.la/2uzwuRd'
    },

    {
        nome: 'Smartphone Galaxy A13 6.6 128gb 4gb Ram Preto Samsung',
        preco: 'R$ 996',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_936358-MLA96155676923_102025-F.webp',
        link: 'https://meli.la/2rBPaD4'
    },

    {
        nome: '2x Película Cerâmica Fosca Privacidade Anti Spy Para Samsung',
        preco: 'R$ 21',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_858597-MLB109227580972_042026-F.webp',
        link: 'https://meli.la/2uNoiFz'
    },

    {
        nome: 'Kit 2 Pelicula 3d De Vidro Para iPhone Todos Os Modelos',
        preco: 'R$ 19',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_788889-MLB106482782277_022026-F-kit-2-pelicula-3d-de-vidro-para-iphone-todos-os-modelos.webp',
        link: 'https://meli.la/16N4UW6'
    },

    {
        nome: 'Samsung Galaxy A14 (exynos) 5G Dual SIM 128 GB Prata 4 GB RAM',
        preco: 'R$ 1.249',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_741262-MLA99444251212_112025-F.webp',
        link: 'https://meli.la/2XgG7xh'
    },

    {
        nome: 'Samsung Galaxy A14 4g 128gb 4gb Ram Cor Preto',
        preco: 'R$ 959',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_676723-MLA99935130105_112025-F.webp',
        link: 'https://meli.la/23tW3y1'
    },

    {
        nome: 'Samsung Galaxy A14 5g 64gb 4gb Ram Prata Cor Cinza',
        preco: 'R$ 1.022',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_652724-MLA95967256569_102025-F.webp',
        link: 'https://meli.la/15Ej2HL'
    },

    {
        nome: 'Samsung Galaxy A14 (MediaTek) 5G Dual SIM 128 GB light green 4 GB RAM',
        preco: 'R$ 1.190',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_780292-MLA99560814144_122025-F.webp',
        link: 'https://meli.la/1tw9yNo'
    },

    {
        nome: 'Samsung Galaxy A15 Dual SIM 5G 256GB Azul-escuro 8GB RAM',
        preco: 'R$ 1.699',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_976128-MLA99481597660_112025-F.webp',
        link: 'https://meli.la/1CRRoSK'
    },

    {
        nome: 'Samsung Galaxy A15 Dual SIM 4G 256GB Azul escuro 8GB RAM',
        preco: 'R$ 2.149',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_952953-MLA99993096701_112025-F.webp',
        link: 'https://meli.la/1qaayAn'
    },

    {
        nome: 'Samsung Galaxy A15 128 GB azul 6 GB RAM',
        preco: 'R$ 1.045',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_988432-MLA99444776632_112025-F.webp',
        link: 'https://meli.la/16AXWqf'
    },

    {
        nome: 'Celular Samsung Galaxy A16 128gb 4gb Ram Câmera 50mp Tela 6.7 Nfc Preto',
        preco: 'R$ 919',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_707658-MLA96866257617_102025-F.webp',
        link: 'https://meli.la/1ngcbFC'
    },

    {
        nome: 'Celular Samsung Galaxy A16 5g, 128gb + 4gb Ram, Câmera De Até 50mp, Tela 6.7 , Nfc, Ip54, Bateria 5000 Mah Cinza (Novo com caixa aberta)',
        preco: 'R$ 1.042',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_857371-MLA99497292630_112025-F.webp',
        link: 'https://meli.la/2WnjT8w'
    },

    {
        nome: 'Celular Samsung Galaxy A16 4G, 256gb + 8gb Ram, Câmera De Até 50mp, Tela 6.7 , Nfc, Ip54, Bateria 5000 Mah Preto',
        preco: 'R$ 1.599',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_681160-MLA96579016308_112025-F.webp',
        link: 'https://meli.la/2jEWN79'
    },



    {
        nome: 'Plus do Brasil Cabo Usb Turbo Tipo C Compativel Com Samsung Galaxy S25 S24 Plus S23 Fe S22 S21 S20 A16 A15 A22 A13 A14 A55 A53 A54 A06 A05s A20 A21 Apple iPhone 17 16 15 Carplay Auto Android',
        preco: 'R$ 19',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_658550-MLA110156406920_042026-F.webp',
        link: 'https://meli.la/2JR34F4'
    },

    {
        nome: 'Celular Samsung Galaxy A16 5g 256gb 8gb Ram Câmera de 50mp Nfc Verde Claro',
        preco: 'R$ 2.199',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_676370-MLA99488926540_112025-F.webp',
        link: 'https://meli.la/22wYy1K'
    },

    {
        nome: 'Celular Samsung Galaxy A17 Com Ia, 128gb, 4gb Ram, Câm De 50mp, Tela De 6.7 , Nfc, Ip54 - Preto',
        preco: 'R$ 879',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_807017-MLA91535682558_092025-F.webp',
        link: 'https://meli.la/1WgmR6V'
    },

    {
        nome: 'Celular Samsung Galaxy A17 Com Ia, 256gb, 8gb Ram, Câm De 50mp, Tela De 6.7 , Nfc, Ip54 - Preto',
        preco: 'R$ 1.079',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_781103-MLA99983064831_112025-F.webp',
        link: 'https://meli.la/1E7z4Re'
    },

    {
        nome: 'Celular Samsung Galaxy A17 5g Com Ia, 256gb, 8gb Ram, Câm De 50mp, Tela De 6.7 , Nfc, Ip54 - Cinza',
        preco: 'R$ 1.374',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_702537-MLA100077733515_122025-F.webp',
        link: 'https://meli.la/2ZDZMgd'
    },

    {
        nome: 'Samsung Galaxy A22 5G Dual SIM 128 GB Gray 4 GB RAM',
        preco: 'R$ 1.299',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_940025-MLA96867393889_102025-F.webp',
        link: 'https://meli.la/1yngvkm'
    },

    {
        nome: 'Samsung Galaxy A22 Dual SIM 64 GB branco 4 GB RAM',
        preco: 'R$ 1.049',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_641667-MLA69724872848_052023-F.webp',
        link: 'https://meli.la/1xdNZHf'
    },

    {
        nome: 'Samsung Galax A23 5G Dual Sim 128gb 4gb Ram Cor Branco',
        preco: 'R$ 1.745',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_802008-MLA99940512841_112025-F.webp',
        link: 'https://meli.la/1eHuwAf'
    },

    {
        nome: 'Smartphone Samsung Galaxy A23 6.6 128gb 4gb Ram Azul',
        preco: 'R$ 1.354',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_761422-MLA93085347108_092025-F.webp',
        link: 'https://meli.la/2FTkFCu'
    },

    {
        nome: 'Samsung Galaxy A25 5G Dual SIM 128Gb Azul Escuro 6Gb Ram',
        preco: 'R$ 1.657',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_667838-MLA99562178066_122025-F.webp',
        link: 'https://meli.la/2E2CA4N'
    },

    {
        nome: 'Smartphone Samsung Galaxy A25 5G 256GB 8GB Ram Dual SIM Android 14 Azul-Escuro 6,5 (Novo com caixa aberta)',
        preco: 'R$ 1.429',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_936288-MLA99870057759_112025-F.webp',
        link: 'https://meli.la/1ZLZAXs'
    },

    {
        nome: 'Smartphone Samsung Galaxy A36 5g 128gb 6gb Ram Câmera Tripla De Até 50mp Selfie De 12mp Ip67 Super Amoled 6.7 Nfc Recursos Ai Android E Segurança Snapdragon - Preto',
        preco: 'R$ 1.419',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_705075-MLA99943632917_112025-F.webp',
        link: 'https://meli.la/1p6vrke'
    },

    {
        nome: 'Celular Samsung Galaxy A26 5g 256gb, 8gb Ram, Câmera De 50mp, Ip67, Tela Super Amoled 6.7 , Nfc - Preto',
        preco: 'R$ 1.590',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_792472-MLA100025549859_122025-F.webp',
        link: 'https://meli.la/2a98aaC'
    },

    {
        nome: 'Samsung Galaxy A26 Preto',
        preco: 'R$ 1.989',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_772705-MLA99972432861_112025-F.webp',
        link: 'https://meli.la/1XDZqj5'
    },

    {
        nome: 'Celular Samsung Galaxy A26 5g 256gb, 8gb Ram, Câmera De 50mp, Ip67, Tela Super Amoled 6.7 , Nfc - Preto (Novo com caixa aberta)',
        preco: 'R$ 1.891',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_792472-MLA100025549859_122025-F.webp',
        link: 'https://meli.la/27AHx2X'
    },

    {
        nome: 'Smartphone Samsung Galaxy A31 6.4 128gb 4gb Ram Preto',
        preco: 'R$ 1.219',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_845189-MLA96125164715_102025-F.webp',
        link: 'https://meli.la/2iBbJyi'
    },

    {
        nome: 'Samsung Galaxy A32 Dual SIM 128 GB preto 4 GB RAM',
        preco: 'R$ 1.499',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_845226-MLA99574342814_122025-F.webp',
        link: 'https://meli.la/2uSuiXY'
    },

    {
        nome: 'Samsung Galaxy A32 4gb 128gb Violeta 5g',
        preco: 'R$ 1.599',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_680621-MLU69146534425_042023-F.webp',
        link: 'https://meli.la/2NZqHYW'
    },

    {
        nome: 'Smartphone Samsung Galaxy A33 5g Tela 6.4 128gb 6gb Ram Azul',
        preco: 'R$ 1.399',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_986055-MLA93495119963_092025-F.webp',
        link: 'https://meli.la/1UMUREC'
    },

    {
        nome: 'Smartphone Galaxy A33 5g 6.4 128gb 6gb Ram Preto Samsung (Novo com caixa aberta)',
        preco: 'R$ 1.357',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_627161-MLA99459845532_112025-F.webp',
        link: 'https://meli.la/11jg4aV'
    },

    {
        nome: 'Samsung Galaxy A33 5G 128 GB preto 6 GB RAM (Novo com caixa aberta)',
        preco: 'R$ 1.569',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_979874-MLA51000508349_082022-F.webp',
        link: 'https://meli.la/1FgzbHn'
    },

    {
        nome: 'Samsung Galaxy A34 Dual Chip 5G 128GB Preto 6GB RAM',
        preco: 'R$ 1.873',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_841874-MLA100010456593_122025-F.webp',
        link: 'https://meli.la/1BdBAH3'
    },

    {
        nome: 'Celular Samsung Galaxy A37 5g 256gb, 8gb Ram, Câmera 50mp Verde',
        preco: 'R$ 2.776',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_832338-MLA109626279958_042026-F.webp',
        link: 'https://meli.la/1xzJew5'
    },

    {
        nome: 'Samsung Galaxy A35 5G 128GB Azul-escuro 6GB RAM (Novo com caixa aberta)',
        preco: 'R$ 1.579',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_810090-MLA99502164180_112025-F.webp',
        link: 'https://meli.la/2FGMwBW'
    },

    {
        nome: 'Smartphone Samsung Galaxy A35 5G 128GB 6GB RAM Câmeras Traseiras 50.0 MP + 8.0 MP + 5.0 MP Selfie 13.0 MP Azul EscuroEscuro',
        preco: 'R$ 1.899',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_913486-MLA99985168635_112025-F.webp',
        link: 'https://meli.la/2pQ9i2m'
    },

    {
        nome: 'Celular Samsung Galaxy A37 5g 128gb, 6gb Ram, Câmera 50mp Preto',
        preco: 'R$ 2.443',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_684352-MLA110556027739_042026-F.webp',
        link: 'https://meli.la/2mPD869'
    },

    {
        nome: 'Samsung Galaxy A35 5G Dual SIM 256GB Azul Escuro 8 GB RAM',
        preco: 'R$ 2.106',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_750326-MLA99872670113_112025-F.webp',
        link: 'https://meli.la/1QHz92T'
    },

    {
        nome: 'Celular Samsung Galaxy A36 5g 256gb 8gb Ram Branco',
        preco: 'R$ 1.699',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_697102-MLA99477666220_112025-F.webp',
        link: 'https://meli.la/1XQSMgz'
    },

    {
        nome: 'Smartphone Samsung Galaxy A36 5g 256gb, 8gb Ram, Recursos Ai',
        preco: 'R$ 1.698',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_604003-MLA82943652149_032025-F.webp',
        link: 'https://meli.la/1Xe8SRt'
    },

    {
        nome: 'Samsung Galaxy A37 5g Verde 6gb 128gb',
        preco: 'R$ 2.199',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_661201-MLB110805549536_052026-F.webp',
        link: 'https://meli.la/32S756N'
    },

    {
        nome: 'Samsung Galaxy A50 Dual SIM 64 GB preto 4 GB RAM',
        preco: 'R$ 1.499',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_821218-MLA99959926011_112025-F.webp',
        link: 'https://meli.la/2CeduhP'
    },

    {
        nome: 'Smartphone Samsung Galaxy A51 Tela 6.5 128gb 4gb Ram Cinza',
        preco: 'R$ 1.798',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_828315-MLA97023494054_112025-F.webp',
        link: 'https://meli.la/2yRTpHr'
    },

    {
        nome: 'Smartphone Samsung Galaxy A52 Tela 6,5 128gb 6gb Ram Lilás (Novo com caixa aberta)',
        preco: 'R$ 2.190',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_908128-MLA99924426765_112025-F.webp',
        link: 'https://meli.la/1z6Erin'
    },

    {
        nome: 'Smartphone Galaxy A53 5g 128 Gb 8gb Tela 6,5 Azul Samsung',
        preco: 'R$ 1.799',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_867057-MLA95651217470_102025-F.webp',
        link: 'https://meli.la/1dTGwCb'
    },

    {
        nome: 'Samsung Galaxy A54 5G 256GB Preto 8GB RAM',
        preco: 'R$ 2.599',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_735376-MLA99508600708_112025-F.webp',
        link: 'https://meli.la/1MCtS8o'
    },

    {
        nome: 'Samsung Galaxy A54 5g 128gb 8gb Ram Verde Lima',
        preco: 'R$ 2.130',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_878188-MLA99917504809_112025-F.webp',
        link: 'https://meli.la/19daagk'
    },

    {
        nome: 'Samsung Galaxy A55 5g Dual Sim 128 Gb Azul-escuro 8 Gb Ram',
        preco: 'R$ 2.244',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_764395-MLA100066474331_122025-F.webp',
        link: 'https://meli.la/2LNFtAr'
    },

    {
        nome: 'Celular Samsung Galaxy A55 5g 128gb, Câmera Tripla Tela 6.6 Cor Azul-celeste',
        preco: 'R$ 2.299',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_742269-MLA99389746656_112025-F.webp',
        link: 'https://meli.la/1Zt8ckV'
    },

    {
        nome: 'Samsung Galaxy A55 5G Dual SIM 256 GB Azul escuro 8 GB RAM',
        preco: 'R$ 2.599',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_746001-MLA97557162377_112025-F.webp',
        link: 'https://meli.la/2XAB72s'
    },

    {
        nome: 'Samsung Galaxy A56 5g 128gb 8gb Ram Verde',
        preco: 'R$ 2.225',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_641150-MLA94466176565_102025-F.webp',
        link: 'https://meli.la/345AEbg'
    },

    {
        nome: 'Celular Samsung Galaxy A56 5g 256gb 8gb Ram Cinza',
        preco: 'R$ 2.274',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_927393-MLA100014745899_122025-F.webp',
        link: 'https://meli.la/31PNt9a'
    },

    {
        nome: 'Smartphone Samsung Galaxy A56 5g Preto 256gb, 8gb Ram - Preto',
        preco: 'R$ 2.653',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_693751-MLA97315678331_112025-F.webp',
        link: 'https://meli.la/2DpJQwq'
    },

    {
        nome: 'Smartphone Samsung Galaxy A56 5g 6.7 Pol Octa-core 256gb 8gb',
        preco: 'R$ 2.639',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_686437-MLA106036861148_022026-F.webp',
        link: 'https://meli.la/1ZNc6iN'
    },

    {
        nome: 'Samsung Galaxy A56 128gb Preto Excelente (Recondicionado)',
        preco: 'R$ 1.859',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_923250-MLB98784062383_112025-F.webp',
        link: 'https://meli.la/2Jvoa2s'
    },

    {
        nome: 'Celular Samsung Galaxy A57 5G 256GB, 8GB RAM, Câmera 50MP, IP68, Super AMOLED 6.7", Recursos AI - Cinza',
        preco: 'R$ 2.979',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_872539-MLA109667912982_042026-F.webp',
        link: 'https://meli.la/2HLJnxf'
    },

    {
        nome: 'Celular Samsung Galaxy A57 5G 256GB, 8GB RAM, Câmera 50MP, IP68, Super AMOLED 6.7", Recursos AI - Azul Claro',
        preco: 'R$ 3.110',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_987360-MLA109664859882_042026-F.webp',
        link: 'https://meli.la/2pM3q2x'
    },

    {
        nome: 'Galaxy A57 128gb Awesome Navy',
        preco: 'R$ 2.777',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_638565-MLA111552421395_052026-F.webp',
        link: 'https://meli.la/2DJhtvz'
    },

    {
        nome: 'Celular Samsung Galaxy A57 5g 256gb 8gb Ram Cor Gray',
        preco: 'R$ 2.799',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_807890-MLA109666789142_042026-F.webp',
        link: 'https://meli.la/2MBAWiB'
    },

    {
        nome: 'Celular Samsung Galaxy A57 5G 128GB, 8GB RAM, Câmera 50MP, IP68, Super AMOLED 6.7", Recursos AI - Lilás',
        preco: 'R$ 2.776',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_763730-MLA109669126702_042026-F.webp',
        link: 'https://meli.la/1RsQfoi'
    },

    {
        nome: 'Samsung Galaxy A70 128gb Branco Bom - Trocafone - Usado (Recondicionado)',
        preco: 'R$ 729',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_833064-MLB50683281845_072022-F.webp',
        link: 'https://meli.la/11bHytt'
    },

    {
        nome: 'Smartphone Samsung Galaxy A71 Tela 6,7 128 Gb 6 Gb Ram Cinza',
        preco: 'R$ 2.399',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_870512-MLA43071856400_082020-F.webp',
        link: 'https://meli.la/1xvkJcb'
    },

    {
        nome: 'Smartphone Galaxy A72 6,7 128gb 6gb Ram Preto Samsung',
        preco: 'R$ 2.899',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_712311-MLA95393963486_102025-F.webp',
        link: 'https://meli.la/2kwyB7H'
    },

    {
        nome: 'Smartphone Samsung Galaxy A72 6,7 128gb 6gb Ram Branco',
        preco: 'R$ 3.399',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_897979-MLA96869072153_102025-F.webp',
        link: 'https://meli.la/2qRCPMB'
    },

    {
        nome: 'Smartphone Samsung Galaxy A73 5g, 8gb Ram, 128gb, Tela 6.7 Cor Branco (Novo com caixa aberta)',
        preco: 'R$ 3.049',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_791706-MLA99935952649_112025-F.webp',
        link: 'https://meli.la/1tscmYB'
    },

    {
        nome: 'Samsung Galaxy A50 64 GB preto 4 GB RAM',
        preco: 'R$ 1.698',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_955410-MLA31847950359_082019-F.webp',
        link: 'https://meli.la/33c13bH'
    },

    {
        nome: 'Power Bank 10000mah Carregador Portátil Turbo Rápido Universal Celular - Marca Fergusom - Melhor Carregador Portátil Compatível Com iPhone Notebook Relógios Android Mac Ios Samsung Apple 10000mah',
        preco: 'R$ 38',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_840663-MLA99844371723_112025-F.webp',
        link: 'https://meli.la/1aKtV47'
    },

    {
        nome: 'Monitor LG UltraGear 24 144Hz',
        preco: 'R$ 3.699',
        imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_678582-MLA99572282914_122025-F.webp',
        link: 'https://meli.la/1ErojXP'
    }

];

const productGrid = document.getElementById("productGrid");

function renderizarProdutos(lista) {
    productGrid.innerHTML = "";

    lista.forEach(p => {
        productGrid.innerHTML += `
        <div class="product-card">
          <img src="${p.imagem}">
          <div class="product-info">
            <h3>${p.nome}</h3>
            <span class="price">${p.preco}</span>
            <a href="${p.link}" target="_blank" class="offer-btn">Ver Produto</a>
          </div>
        </div>
      `;
    });
}

renderizarProdutos(produtos);