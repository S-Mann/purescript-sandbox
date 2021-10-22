module Main where

import Prelude

import Effect (Effect)
import Effect.Console (log)

fact :: Int -> Int 
fact 0 = 1 
fact n = n * fact ( n - 1 )


main :: Effect Unit
main = do
  log "The factorial of 5 is:" 
  log (show (fact 5))
