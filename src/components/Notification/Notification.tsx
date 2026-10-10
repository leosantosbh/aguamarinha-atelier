import { useEffect } from "react";
import { Check, X } from "lucide-react";

import "./Notification.css";

interface NotificationProps {
  visible: boolean;
  title?: string;
  message: string;
  duration?: number;
  onClose: () => void;
}

export function Notification({
  visible,
  title = "Pedido recebido!",
  message,
  duration = 5000,
  onClose,
}: NotificationProps) {
  useEffect(() => {
    if (!visible) {
      return;
    }

    const timeout = window.setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [visible, duration, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="notification"
      role="status"
      aria-live="polite"
    >
      <div className="notification__icon">
        <Check size={20} strokeWidth={1.8} />
      </div>

      <div className="notification__content">
        <strong>{title}</strong>

        <p>{message}</p>
      </div>

      <button
        type="button"
        className="notification__close"
        onClick={onClose}
        aria-label="Fechar notificação"
      >
        <X size={18} />
      </button>

      <div
        className="notification__progress"
        style={{
          animationDuration: `${duration}ms`,
        }}
      />
    </div>
  );
}