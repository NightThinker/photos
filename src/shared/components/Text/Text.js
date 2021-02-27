const Text = ({ children, size, weight, className, color }) => {
  return <span className={`flex flex-col ${size || 'text-base'} ${color || 'text-gray-700'} ${weight || 'font-normal'} ${className}`}>{children}</span>
}

export default Text