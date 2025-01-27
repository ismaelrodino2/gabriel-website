interface Theme {
    name: string;
    body: string;
    text: string;
    subtext: string;
    buttonColor: string;
    secondary: string;
    tertiary: string;
    accent: string;
    boxShadow: string;
    contrastText: string;
    footerColor: string;
}

export const lightTheme: Theme = {
    name: 'light',
    body: '#fefefe',
    text: '#363537',
    subtext: '#000000',
    buttonColor: '#000000',
    secondary: '#d7f7f5',
    tertiary: '#75cac3',
    accent: '#263859',
    boxShadow: '0px 2px 10px -2px rgba(134, 134, 134, 0.5)',
    contrastText: '#FAFAFA',
    footerColor: '#F0F0F0',
}

export const darkTheme: Theme = {
    name: 'dark',
    body: '#17223b',
    text: '#FAFAFA',
    subtext: '#D0D0D0',
    buttonColor: '#FFFFFF',
    secondary: '#263859',
    tertiary: '#A2AAB9',
    accent: '#d7f7f5',
    boxShadow: '0px 2px 10px -2px rgba(51, 51, 51, 0.5)',
    contrastText: '#101010',
    footerColor: '#16161D'
} 