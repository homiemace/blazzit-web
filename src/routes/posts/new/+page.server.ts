import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    // Maybe load user data or form defaults, but probably not posts
    return {};
};