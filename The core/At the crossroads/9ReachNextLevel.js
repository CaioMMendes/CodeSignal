function solution(experience, threshold, reward) {
    //experience é a experiencia total
    //threshold é a experiencia para o proximo nivel
    //reward é a experiencia ganha por matar o mob

    if ((experience + reward) >= threshold) {
        return true
    } else {
        return false
    }

}
