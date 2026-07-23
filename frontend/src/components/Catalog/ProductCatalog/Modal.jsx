

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        /* 1. Задний фон (Backdrop) с размытием и кликом для закрытия */
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            {/* 2. Карточка модалки (e.stopPropagation предотвращает закрытие при клике на саму карточку) */}
            <div
                className="relative w-full max-w-sm rounded-3xl bg-amber-100 border border-amber-300/60 p-6 shadow-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Кнопка крестика в углу */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-amber-200/50 text-amber-900 hover:bg-amber-200 transition-colors cursor-pointer"
                    aria-label="Закрыть"
                >
                    ✕
                </button>

                {/* Иконка / Заголовок */}
                <div className="text-3xl mb-2">☎️</div>
                <h2 className="text-xl font-bold text-amber-950 mb-2">
                    Для заказа позвоните нам!
                </h2>
                <p className="text-sm text-amber-900/80 mb-6">
                    Заказ, доставка и подробная консультация:
                </p>

                {/* 3. Кликабельные кнопки вызова */}
                <div className="flex flex-col gap-3 w-full mb-4">
                    <a
                        href="tel:+73522440151"
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-amber-500 hover:bg-amber-600 active:scale-98 text-white font-bold rounded-2xl shadow-sm transition-all"
                    >
                        <span>📞</span> 44-01-51
                    </a>

                    <a
                        href="tel:+73522556065"
                        className="flex items-center justify-center gap-2 py-3 px-4 bg-white/80 hover:bg-white active:scale-98 text-amber-950 font-bold rounded-2xl border border-amber-300/50 shadow-sm transition-all"
                    >
                        <span>📞</span> 55-60-65
                    </a>
                </div>

                {/* Текстовая кнопка закрытия */}
                <button
                    onClick={onClose}
                    className="text-xs font-semibold text-amber-800/60 hover:text-amber-900 underline underline-offset-4 cursor-pointer mt-1"
                >
                    Понятно, закрыть
                </button>
            </div>
        </div>
    );
};

export default Modal;