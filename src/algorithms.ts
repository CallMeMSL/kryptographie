type EuklidStep = [number, number, number, number];

function erweiterterEuklidischerAlgorithmus(k: number, m: number): EuklidStep[] {
  const result: EuklidStep[] = [];
  result.push([k, NaN, 1, 0]);
  result.push([m, Math.floor(k / m), 0, 1])

  for (let i = 1; true; i++) {
    const last_iteration = result[i];
    const snd_last_iteration = result[i - 1];
    const new_a = snd_last_iteration[0] - last_iteration[0] * last_iteration[1];
    if (new_a == 0) {
      break;
    }
    const new_q = Math.floor(last_iteration[0] / new_a);
    const new_c = snd_last_iteration[2] - last_iteration[2] * last_iteration[1];
    const new_d = snd_last_iteration[3] - last_iteration[3] * last_iteration[1];
    result.push([new_a, new_q, new_c, new_d]);
  }
  return result;

}


export {erweiterterEuklidischerAlgorithmus}

