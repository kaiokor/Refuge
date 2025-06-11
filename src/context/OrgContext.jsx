import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const OrgContext = createContext();

export const OrgProvider = ({ children }) => {
  const [org, setOrg] = useState([
    {
      id: 0,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/UNHCR-visibility-vertical-Blue-RGB-v2015.jpg/800px-UNHCR-visibility-vertical-Blue-RGB-v2015.jpg",
      localizacao: "São Paulo - SP",
      nomeBreve: "UNHCR ACNUR",
      descricao:
        "Organização que protege pessoas que foram forçadas a deixar suas casas.",
      imgBanner:
        "https://www.acnur.org/br/sites/br/files/styles/d08_standard/public/2025-02/banner_emergencia.webp?h=7f2a72a1&itok=fb-6tN9g&t=1740149798",
      nome: "Agências da ONU para refugiados - ACNUR",
      historia:
        "O ACNUR, a Agência das Nações Unidas para Refugiados, foi criada em 1950. Hoje, a Agência atua em 135 países com a missão de salvar vidas, proteger direitos e construir um futuro melhor para pessoas forçadas a abandonar suas casas devido a conflitos, perseguições, catástrofes climáticas e violações de direitos humanos. Atualmente, o ACNUR segue protegendo e apoiando mais de 100 milhões de pessoas forçadas a se deslocar. Por esse trabalho humanitário, recebeu duas vezes o Prêmio Nobel da Paz.",
      causa:
        "O ACNUR faz a ponte entre pessoas afetadas por catástrofes e seus direitos em todas as etapas de suas jornadas em busca de segurança e um futuro digno. Atua em emergências, facilitando a regularização de seus documentos, acolhendo-as em abrigos temporários e atendendo às suas necessidades básicas emergenciais. Ainda, auxilia a integração local por meio de acesso à educação e programas de geração de renda, para que possam viver com autonomia e dignidade contribuindo para a economia local. O ACNUR é uma agência das Nações Unidas de natureza política, imparcial e independente. As finanças do ACNUR são auditadas e examinadas em detalhe pelo Comitê de Auditoria das Nações Unidas. Os recursos arrecadados vão para as pessoas que mais precisam, da forma mais eficiente possível. Declarada qualquer emergência, a organização se faz presente com assistência humanitária emergencial em até 72 horas em qualquer lugar do mundo. Junte-se e transforme vidas: apoie a campanha da ACNUR e ajude a construir um futuro melhor. Saiba mais sobre a organização em www.acnur.org/portugues",
    },
    {
      id: 1,
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/International_Rescue_Committee_logo.svg",
      localizacao: "Rio de Janeiro - RJ",
      nomeBreve: "IRC",
      descricao: "Organização que assiste refugiados em contextos de crise.",
      imgBanner:
        "https://www.rescue.org/sites/default/files/styles/widescreen_16x9_1280px_wide/public/2024-07/pic_3.jpg?itok=5ZvODn0d",
      nome: "International Rescue Committee",
      historia:
        "Fundada em 1933, o IRC oferece apoio emergencial e reabilitação a refugiados e populações deslocadas por conflitos e desastres naturais. Com atuação em mais de 40 países, promove educação, saúde e desenvolvimento econômico.",
      causa:
        "O IRC trabalha para salvar vidas e restabelecer a dignidade de pessoas forçadas a fugir, fornecendo abrigo, água potável, cuidados médicos e apoio psicossocial. A organização também defende políticas de reassentamento e proteção internacional.",
    },
    {
      id: 2,
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/MSF_Logo.svg",
      localizacao: "Brasília - DF",
      nomeBreve: "Médicos Sem Fronteiras",
      descricao: "Fornece assistência médica em áreas de conflito e crise.",
      imgBanner:
        "https://portalfmb.org.br/wp-content/uploads/2016/09/medicos4.jpg",
      nome: "Médecins Sans Frontières",
      historia:
        "Criada em 1971, MSF é uma organização médica independente que oferece cuidados de saúde a populações atingidas por guerras, epidemias e desastres naturais, sem discriminação.",
      causa:
        "MSF leva socorro imediato a quem mais precisa, além de documentar violações de direitos humanos e advogar por políticas de saúde mais justas.",
    },
    {
      id: 3,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Save_the_Children_Logo.svg",
      localizacao: "Belo Horizonte - MG",
      nomeBreve: "Save the Children",
      descricao: "Protege direitos de crianças e refugiados.",
      imgBanner:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjvab311_vbYgc5PKllP7_PjpLp1eksgHI6Q&s",
      nome: "Save the Children",
      historia:
        "Fundada em 1919, atua em mais de 100 países promovendo sobrevivência, educação e proteção de crianças em situações de conflito e crise.",
      causa:
        "A organização presta assistência emergencial, garante acesso à educação e defende políticas públicas que priorizem a infância vulnerável.",
    },
    {
      id: 4,
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/CARE_logo.svg",
      localizacao: "Curitiba - PR",
      nomeBreve: "CARE",
      descricao: "Combate pobreza e apoia refugiados.",
      imgBanner:
        "https://marvel-b1-cdn.bc0a.com/f00000000163918/www.care.org/wp-content/uploads/2020/05/rs42594_dall_20171205_10055107-lpr.webp",
      nome: "CARE International",
      historia:
        "Desde 1945, a CARE combate a pobreza global e presta ajuda a refugiados, com foco em empoderamento feminino e desenvolvimento sustentável.",
      causa:
        "CARE oferece suprimentos de emergência, programas de nutrição, água potável e apoio para a estabilidade econômica de famílias deslocadas.",
    },
    {
      id: 5,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2d/MercyCorps-logo.svg",
      localizacao: "Porto Alegre - RS",
      nomeBreve: "Mercy Corps",
      descricao: "Trabalha para alívio em crises humanitárias.",
      imgBanner:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66cQcFIYfqoC74eZ-R8xooq2MuFTMjA2VFg&s",
      nome: "Mercy Corps",
      historia:
        "Fundada em 1979, atende populações afetadas por desastres naturais e conflitos, oferecendo infraestrutura, apoio financeiro e programas de comunidade.",
      causa:
        "Mercy Corps capacita refugiados com treinamento profissional, ajuda financeira e acesso a mercados locais, promovendo autossuficiência.",
    },
    {
      id: 6,
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Refugees_International_logo.svg",
      localizacao: "Recife - PE",
      nomeBreve: "Refugees International",
      descricao: "Advoga por políticas de proteção a refugiados.",
      imgBanner:
        "https://d3jwam0i5codb7.cloudfront.net/wp-content/uploads/2025/05/c4a90589-0d6b-43a4-9bc4-4d2fb66e1307-2240x1500.jpg",
      nome: "Refugees International",
      historia:
        "Desde 1979, monitora crises globais e faz lobby por mudanças nas políticas de proteção e reassentamento de refugiados.",
      causa:
        "A organização produz relatórios, faz campanhas de sensibilização e pressiona governos para aumentar a segurança e assistência a deslocados.",
    },
    {
      id: 7,
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/LWR_logo.svg",
      localizacao: "Fortaleza - CE",
      nomeBreve: "LWR",
      descricao: "Ajuda comunidades em crise.",
      imgBanner:
        "https://lwr.org/sites/default/files/styles/special_slider_extra_large/public/donateemergency.jpg?itok=AA1T-Xf5",
      nome: "Lutheran World Relief",
      historia:
        "Fundada em 1945, LWR trabalha com refugiados e populações vulneráveis para promover segurança alimentar e desenvolvimento rural.",
      causa:
        "Distribui kits agrícolas, sementes e realiza treinamentos, garantindo meios de subsistência em campos de refugiados.",
    },

    {
      id: 8,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/IFRC_logo.svg",
      localizacao: "Curitiba - PR",
      nomeBreve: "Cruz Vermelha",
      descricao: "Atua em emergências de conflitos e desastres.",
      imgBanner:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaiKnFA0vRsHIDvwW-uZm-QvPig3ttPTvbSw&s",
      nome: "International Federation of Red Cross and Red Crescent Societies",
      historia:
        "Com origens em 1863, a IFRC coordena a ação humanitária de 192 sociedades nacionais, oferecendo socorro e assistência em crises.",
      causa:
        "A Cruz Vermelha fornece abrigo, primeiros socorros, água potável e apoio psicológico em campos de refugiados e zonas de desastre.",
    },
    {
      id: 9,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Amnesty_International_logo.svg",
      localizacao: "Vitória - ES",
      nomeBreve: "Amnesty Int.",
      descricao: "Defende direitos humanos de refugiados.",
      imgBanner:
        "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Amnesty_International_logo.svg/250px-Amnesty_International_logo.svg.png",
      nome: "Amnesty International",
      historia:
        "Desde 1961, luta contra violações de direitos humanos e defende o direito de refúgio para pessoas perseguidas por questões políticas, étnicas ou religiosas.",
      causa:
        "Amnesty investiga abusos, faz campanhas internacionais e pressiona governos a respeitar o direito de asilo e garantir segurança aos refugiados.",
    },
    {
      id: 10,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Doctors_of_the_World_logo.svg",
      localizacao: "Campinas - SP",
      nomeBreve: "Doctors World",
      descricao: "Assistência médica a refugiados vulneráveis.",
      imgBanner:
        "https://media.licdn.com/dms/image/v2/C4E1BAQFR5dvaP6v57Q/company-background_10000/company-background_10000/0/1632927319303/doctors_of_the_world_uk_cover?e=2147483647&v=beta&t=_8mkmYy2t2qBtlsbfDpNNukRWwcD1ePWOakIxr3B-H4",
      nome: "Doctors of the World",
      historia:
        "Fundada em 1980, leva cuidados de saúde a populações marginalizadas e refugiados em contextos de conflito e exclusão social.",
      causa:
        "Fornece consultas, tratamentos e apoio psicossocial, além de capacitar profissionais de saúde locais.",
    },
    {
      id: 11,
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/HIAS_logo.svg",
      localizacao: "São José dos Campos - SP",
      nomeBreve: "HIAS",
      descricao: "Protege refugiados e requerentes de asilo.",
      imgBanner:
        "https://hias.org/wp-content/uploads/2022/07/20211210_Mexico_Ciudad-Juarez_027.jpg",
      nome: "HIAS (Hebrew Immigrant Aid Society)",
      historia:
        "Desde 1881, HIAS apoia refugiados judaicos e outras populações deslocadas, oferecendo assistência legal, abrigo e programas de integração.",
      causa:
        "HIAS provê serviços de reassentamento, orientação legal e programas comunitários para uma integração bem-sucedida.",
    },

    {
      id: 12,
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/SolidarityNow_logo.svg",
      localizacao: "Goiânia - GO",
      nomeBreve: "SolidarityNow",
      descricao: "Apoia refugiados na Grécia e internacionalmente.",
      imgBanner:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPW-QB5UlYqCEj80uXN-36gkGhPJOMJSiP4Q&s",
      nome: "SolidarityNow",
      historia:
        "Criada em 2012, trabalha na Grécia provendo serviços legais, abrigo e educação para refugiados e migrantes.",
      causa:
        "SolidarityNow facilita o acesso a direitos básicos e promove iniciativas culturais e educacionais para integração.",
    },
    {
      id: 13,
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ac/WaterAid_logo.svg",
      localizacao: "Vitória - ES",
      nomeBreve: "WaterAid",
      descricao: "Garante acesso à água potável a refugiados.",
      imgBanner:
        "https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A300216ef-f95f-41f9-80f7-e5b9d67e0319?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1",
      nome: "WaterAid",
      historia:
        "Desde 1981, WaterAid trabalha para fornecer água limpa, saneamento e higiene em países em desenvolvimento, incluindo campos de refugiados.",
      causa:
        "Instala sistemas de água e saneamento, promove educação em higiene e melhora as condições de saúde das comunidades deslocadas.",
    },
    {
      id: 14,
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/International_Organisation_for_Migration_logo.svg",
      localizacao: "São Luís - MA",
      nomeBreve: "OIM",
      descricao: "Gerencia migrações e assistência a refugiados.",
      imgBanner:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJD2LgAUeYo_XZTXeCOVorCZDK6qIzFXvUA&s",
      nome: "International Organization for Migration",
      historia:
        "Criada em 1951, a OIM coordena migraçõe s seguras e auxiliou milhões de refugiados em reassentamento e retorno voluntário.",
      causa:
        "Oferece transporte seguro, assistência médica e apoio à reintegração social e econômica de migrantes e refugiados.",
    },
    {
      id: 15,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/World_Food_Programme_logo.svg",
      localizacao: "Campo Grande - MS",
      nomeBreve: "WFP",
      descricao: "Fornece alimentação emergencial a deslocados.",
      imgBanner:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv9QjLEWPasFNIX5posRPMfb3L70rj15s8nw&s",
      nome: "World Food Programme",
      historia:
        "Desde 1961, o WFP combate fome em crises, entregando comida e nutrição a refugiados e comunidades vulneráveis.",
      causa:
        "Distribui cestas alimentares, fornece alimentação escolar e promove segurança alimentar para restaurar a dignidade humana.",
    },
  ]);

  return (
    <OrgContext.Provider value={{ org, setOrg }}>
      {children}
    </OrgContext.Provider>
  );
};
