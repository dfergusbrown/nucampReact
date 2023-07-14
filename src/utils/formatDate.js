export const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        yearyear: 'numeric',
        month: 'short',
        day: '2-digit'
    }).format(new Date(Date.parse(date)))
};