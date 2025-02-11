                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              onClick={() => handleTestimonialChange(index)}
              className={`w-3 h-3 p-0 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-amber-500 scale-125'
                  : 'bg-gray-400 hover:bg-amber-400'
              }`}
              title={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl" />
    </section>
  )
                  }
