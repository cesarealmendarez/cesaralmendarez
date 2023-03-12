<AnimatePresence 
mode="wait"
initial={true}
>
    <motion.div
        key={experience[selectedExperienceID].experienceID}
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        exit={{ x: 10, opacity: 0 }}                                              
        className="space-y-6"
    >

    </motion.div>
</AnimatePresence>