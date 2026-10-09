export type Service = { title: string; description: string; image: string };
export type Review = { name: string; text: string; rating: 1 | 2 | 3 | 4 | 5; source?: string };
// Preencher apenas com dados confirmados. Número internacional, apenas algarismos.
export const business = {
    name: 'GuudPet', whatsapp: '', phone: '', address: '', mapsUrl: '', hours: [] as string[],
    socials: [] as { name: string; url: string }[], services: [
        { title: 'Banho e tosa', description: 'Pelo limpo e um visual renovado, do primeiro enxaguamento ao último retoque.', image: '/images/service-grooming.webp' },
        { title: 'Pet shop', description: 'Alimentação, brinquedos e acessórios: encontra os essenciais para passear, brincar e descansar.', image: '/images/service-shop.webp' },
        { title: 'Veterinário', description: 'Apoio profissional para esclarecer questões de saúde e orientar decisões ao longo da vida.', image: '/images/service-vet.webp' },
    ] as Service[],
    introduction: 'Um universo para cães, gatos e os humanos que não imaginam a vida sem eles.',
    introductionApproved: false,
    galleryVerified: false,
    reviews: [
        { name: 'Destaques do Google', text: 'Lugar agradável, confortável, boa variedade e com ótimos profissionais!', rating: 5, source: 'Avaliações no Google · excerto' },
        { name: 'Lawrhanna Santos', text: 'Os veterinários são excelentes profissionais. Além disso, as recepcionistas também são maravilhosas.', rating: 5, source: 'Avaliação no Google · excerto' },
        { name: 'Claudio Albuquerque', text: 'Nota 10! Ambiente limpo e organizado, muito amor para cuidar dos nossos bichinhos.', rating: 5, source: 'Avaliação no Google' },
        { name: 'Joyce Alves', text: 'Levo o meu cachorro Bolt, da raça Lulu da Pomerânia, para tomar banho na GuudPet e ele adora!', rating: 5, source: 'Avaliação no Google · excerto' },
    ] as Review[],
    message: 'Olá, GuudPet! Gostaria de saber mais sobre os serviços e solicitar um agendamento.',
};
export function whatsappUrl(number = business.whatsapp) {
    const digits = number.replace(/\D/g, '');
    return /^\d{8,15}$/.test(digits) ? `https://wa.me/${digits}?text=${encodeURIComponent(business.message)}` : null;
}
export function mapsUrl() {
    return business.mapsUrl || (business.address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address)}` : null);
}
export function phoneUrl(number = business.phone) {
    const digits = number.replace(/\D/g, '');
    return /^\d{8,15}$/.test(digits) ? `tel:${number.trim().startsWith('+') ? '+' : ''}${digits}` : null;
}
