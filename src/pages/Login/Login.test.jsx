import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import { AuthProvider } from '../../context/AuthProvider';
import api from '../../context/api';

// Render avec le contexte pour éviter les crash
vi.mock('../../context/api', () => ({
    default: { post: vi.fn() },
}));

function renderLogin() {
    render(
        <AuthProvider>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<p>accueil</p>} />
                </Routes>
            </MemoryRouter>
        </AuthProvider>
    );
    return userEvent.setup();
}

beforeEach(() => {
    sessionStorage.clear();
    vi.clearAllMocks();
});

describe('Login', () => {

    it('devrait avoir le bouton de soumission désactivé initialement', () => {
        renderLogin();

        const submitButton = screen.getByRole('button', { name: /se connecter/i });
        expect(submitButton).toBeDisabled();
    });

    it('devrait activer le bouton de soumission uniquement quand le formulaire est valide', async () => {
        const user = renderLogin();

        const emailInput = screen.getByPlaceholderText('Adresse e-mail');
        const passwordInput = screen.getByPlaceholderText('Mot de passe');
        const submitButton = screen.getByRole('button', { name: /se connecter/i });

        // 1. Saisir un email invalide
        await user.type(emailInput, 'invalid-email');
        expect(submitButton).toBeDisabled();

        // 2. Saisir un mot de passe court
        await user.type(passwordInput, '1234');
        expect(submitButton).toBeDisabled();

        // 3. Corriger l'email (il devient valide), mot de passe toujours trop court
        await user.type(emailInput, '@domain.com');
        expect(submitButton).toBeDisabled();

        // 4. Allonger le mot de passe → formulaire valide
        await user.type(passwordInput, '5678');
        expect(submitButton).toBeEnabled();
    });

    it("devrait envoyer les identifiants et rediriger vers l'accueil", async () => {
        api.post.mockResolvedValue({ data: { access: 'a1', refresh: 'r1' } });
        const user = renderLogin();

        const emailInput = screen.getByPlaceholderText('Adresse e-mail');
        const passwordInput = screen.getByPlaceholderText('Mot de passe');
        const submitButton = screen.getByRole('button', { name: /se connecter/i });

        await user.type(emailInput, 'user@test.com');
        await user.type(passwordInput, 'a-valid-password');
        await user.click(submitButton);

        expect(api.post).toHaveBeenCalledTimes(1);
        expect(api.post).toHaveBeenCalledWith(
            '/api/users/token/',
            { email: 'user@test.com', password: 'a-valid-password' },
            { withCredentials: true }
        );
        expect(await screen.findByText('accueil')).toBeInTheDocument();
    });
});