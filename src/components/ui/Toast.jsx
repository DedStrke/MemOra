import { AnimatePresence, motion } from 'framer-motion'
import Icon from '@/components/ui/Icon'
import { useApp } from '@/context/AppProvider'

/*
  One floating confirmation pill, bottom-centre. Used for actions whose
  result is otherwise invisible - signing out redirects you away from the
  app, so without this you'd land on the landing page with no confirmation
  that anything actually happened.

  Driven by context (toast / showToast) so it survives the navigation that
  usually follows the action that triggered it.
*/
export default function Toast() {
  const { toast } = useApp()

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong flex items-center gap-2.5 rounded-full px-5 py-3 shadow-lg"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-success/20 text-success">
              <Icon name="check" className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-semibold text-fg">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
