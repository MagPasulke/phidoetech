export const translations = {
    de: {
        langButton: 'EN',
        langButtonAria: 'Switch to English',
        nav: {
            offerings: 'Mein Beitrag',
            blogs: 'Blog',
            contact: 'Kontakt'
        },
        hero: {
            eyebrow: 'SAP Developer & Solutions Architect',
            title: 'Enterprise SAP Lösungen,\ndie echten Mehrwert schaffen.',
            lead: 'Über 10 Jahre Erfahrung in SAP Development & Architektur.',
            secondary:
                'Lösungsarchitekturen für Business-Anwendungen auf S/4HANA und der SAP Business Technology Platform (BTP).',
            modulesLabel: 'Funktionales Wissen',
            modules: ['WM', 'EWM', 'IM', 'SD'],
            strength:
                'Meine Stärke ist Vielseitigkeit über Rollen und Abstraktionsebenen hinweg: von Hands-on-Entwicklung über die Leitung von Entwicklungs- und Architekturprojekten bis zum Mentoring – tiefes technisches Know-how gepaart mit der Fähigkeit, Teams auf Augenhöhe zu führen.',
            ctaPrimary: 'Zusammenarbeit anfragen',
            ctaSecondary: 'Angebot entdecken',
            portraitAlt: 'Porträtfoto – SAP Developer & Solutions Architect',
            stats: [
                { value: '10+', label: 'Jahre SAP' },
                { value: 'S/4HANA', label: '& BTP' },
                { value: 'ABAP · CAP · UI5', label: 'Full Stack' }
            ]
        },
        pillars: {
            heading: 'Zwei Schwerpunkte – ein Partner',
            subheading:
                'Vielseitigkeit über Rollen und Abstraktionsebenen hinweg: von der Architektur bis zur Codezeile.',
            strategy: {
                badge: 'Beratung & Enablement',
                title: 'Strategie, Prozesse & Governance',
                intro:
                    'Beratung und Unterstützung dort, wo die Weichen für gute Entwicklung gestellt werden.',
                items: [
                    'Development-Prozesse & Governance',
                    'Clean Core Strategie & Umsetzung',
                    'Release Management im SAP-Umfeld',
                    'Strategisches Skill-Management im Dev-Team',
                    'Adoption von AI-basierten Development-Workflows'
                ]
            },
            handson: {
                badge: 'Hands-on Development',
                title: 'Moderne, Cloud-ready Entwicklung',
                intro:
                    'Modern, clean und cloud-ready – von der Schnittstelle bis zur fertigen Fiori-App.',
                items: [
                    'Modernes, Cloud-ready ABAP (Classic, Cloud, RAP)',
                    'BTP CAP (Node.js) für Cloud-native Development',
                    'UI5 & Fiori Elements Anwendungen',
                    'Interface Design & Development (OData, SOAP, APIs)',
                    'AI-Integration & MCP-Server für SAP'
                ]
            }
        },
        blogs: {
            eyebrow: 'Blog & Artikel',
            heading: 'Von der Werkbank',
            subheading: 'Experimente und Tech-Demos.',
            filterAll: 'Alle',
            filterLabel: 'Nach Thema filtern',
            readCta: 'Auf LinkedIn lesen'
        },
        contact: {
            heading: 'Lassen Sie uns sprechen',
            body:
                'Sie planen ein S/4HANA-Projekt, eine BTP-Erweiterung oder suchen Unterstützung bei Ihrer Clean-Core-Strategie? Ich freue mich auf Ihre Nachricht.',
            cta: 'E-Mail schreiben',
            linkedin: 'LinkedIn'
        },
        footer: {
            role: 'SAP Developer & Solutions Architect',
            rights: 'Alle Rechte vorbehalten.'
        }
    },
    en: {
        langButton: 'DE',
        langButtonAria: 'Zu Deutsch wechseln',
        nav: {
            offerings: 'How I contribute',
            blogs: 'Blog',
            contact: 'Contact'
        },
        hero: {
            eyebrow: 'SAP Developer & Solutions Architect',
            title: 'Enterprise SAP systems\nthat drive real business value.',
            lead: 'Over 10 years of experience in SAP development & architecture.',
            secondary:
                'Solution architectures for business applications on S/4HANA and the SAP Business Technology Platform (BTP).',
            modulesLabel: 'Functional knowledge',
            modules: ['WM', 'EWM', 'IM', 'SD'],
            strength:
                'My strength is versatility across roles and abstraction levels: from hands-on development to leading development and architecture projects and mentoring team members – deep technical know-how paired with the ability to lead teams on eye-level.',
            ctaPrimary: 'Start a conversation',
            ctaSecondary: 'Explore the offering',
            portraitAlt: 'Portrait photo – SAP Developer & Solutions Architect',
            stats: [
                { value: '10+', label: 'Years SAP' },
                { value: 'S/4HANA', label: '& BTP' },
                { value: 'ABAP · CAP · UI5', label: 'Full stack' }
            ]
        },
        pillars: {
            heading: 'Two focus areas – one partner',
            subheading:
                'Versatility across roles and abstraction levels: from strategy down to the line of code.',
            strategy: {
                badge: 'Consulting & Enablement',
                title: 'Strategy, Processes & Governance',
                intro:
                    'Consulting and support where the course for good development is set.',
                items: [
                    'Development processes & governance',
                    'Clean Core strategy & implementation',
                    'Release management in the SAP landscape',
                    'Strategic skill management in dev teams',
                    'Adoption of AI-based development workflows'
                ]
            },
            handson: {
                badge: 'Hands-on Development',
                title: 'Modern, cloud-ready development',
                intro:
                    'Modern, clean and cloud-ready – from the interface to the finished Fiori app.',
                items: [
                    'Modern, cloud-ready ABAP (classic, cloud, RAP)',
                    'BTP CAP (Node.js) for cloud-native development',
                    'UI5 & Fiori Elements applications',
                    'Interface design & development (OData, SOAP, APIs)',
                    'AI integration & MCP servers for SAP'
                ]
            }
        },
        blogs: {
            eyebrow: 'Blog & Articles',
            heading: 'From the Workbench',
            subheading: 'Experiments and tech demos.',
            filterAll: 'All',
            filterLabel: 'Filter by topic',
            readCta: 'Read on LinkedIn'
        },
        contact: {
            heading: 'Let’s talk',
            body:
                'Planning an S/4HANA project, a BTP extension, or looking for support with your Clean Core strategy? I look forward to hearing from you.',
            cta: 'Write an email',
            linkedin: 'LinkedIn'
        },
        footer: {
            role: 'SAP Developer & Solutions Architect',
            rights: 'All rights reserved.'
        }
    }
};

// Blog-Einträge sind sprachneutral (Titel/URL/Tags bleiben in Originalsprache).
// Tags stammen aus einem festen Vokabular; die Filterleiste wird daraus abgeleitet.
// Titel aus den LinkedIn-Slugs abgeleitet – bei Bedarf an die Originaltitel anpassen.
// Reihenfolge der Einträge = Anzeigereihenfolge auf der Seite (einfach umsortieren).
export const blogPosts = [
    {
        title: 'Off-Stack ABAP: A Practical Example, Pt. 2',
        url: 'https://www.linkedin.com/pulse/off-stack-abap-practical-example-pt-2-philipp-d%C3%B6lker-od9pe/',
        tags: ['ABAP', 'AI']
    },
    {
        title: 'Off-Stack ABAP: A Practical Example',
        url: 'https://www.linkedin.com/pulse/off-stack-abap-practical-example-philipp-d%C3%B6lker-oacze/',
        tags: ['ABAP', 'AI']
    },
    {
        title: '4 Concepts Towards AI-Assisted ABAP',
        url: 'https://www.linkedin.com/pulse/4-concepts-towards-ai-assisted-abap-philipp-d%C3%B6lker-uljne/',
        tags: ['AI', 'ABAP']
    },
    {
        title: 'End-to-End Sandbox Setup for a SAP MCP Server on BTP',
        url: 'https://www.linkedin.com/pulse/end-to-end-sandbox-setup-sap-mcp-server-btp-philipp-d%C3%B6lker-ghxhe/',
        tags: ['AI', 'BTP']
    },
    {
        title: 'Automating SAP Support Workflows with a Custom Agent',
        url: 'https://www.linkedin.com/pulse/automating-sap-support-workflows-custom-agent-philipp-d%C3%B6lker-9tkue/',
        tags: ['AI']
    },
    {
        title: 'AWS SDK for ABAP: A Simple Integration Sample with S3 and SAP S/4HANA',
        url: 'https://www.linkedin.com/pulse/aws-sdk-abap-simple-integration-sample-s3-sap-s4-hana-d%C3%B6lker-pljne/',
        tags: ['ABAP', 'BTP']
    },
    {
        title: 'I Am Procrastinating: On Technology Without Purpose',
        url: 'https://www.linkedin.com/pulse/i-am-procrastinating-how-technology-without-purpose-philipp-d%C3%B6lker-bec3f/',
        tags: ['AI', 'ABAP']
    },
    {
        title: 'Back to Basics: Internal Enhancement Spots, BAdIs & Building Blocks',
        url: 'https://www.linkedin.com/pulse/back-basics-internal-enhancement-spots-badis-building-d%C3%B6lker-jgjrf/',
        tags: ['ABAP']
    }
];
