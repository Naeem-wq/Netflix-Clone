let myVue = new Vue({
  el: "#app",

  data: {
    searchInput: {
      searchText: "",
    },
    searched: false,
    InList: false,
    fullList: false,

    movies: [
      {
        Title: "Peaky Blinders",
        Genre: "Coming Soon",
        Description:
          "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcSnkLOZxSQNMSfboSbQ533q6KTZUccNtDXq1TgmziR6IscSONhyv78kTVq1nO5oG5PelDAbRICxptavShNm7y2F-Ou0maE8TUTGE1rJCa_2NltTItgghZSAP0m_Ryhu5eQF.jpg?r=777",
      },

      {
        Title: "The Man From Toronto",
        Genre: "Coming Soon",
        Description:
          "A case of mistaken identity forces a bumbling entrepreneur to team up with a notorious assassin known as The Man from Toronto in hopes of staying alive.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTfz2DvTv6SYjaYJFXUSiiEIZNBHf-14PSb_b1K-RVXlm8sUlgdwTlTW_0O1J6bwAlV8zlVSuqPaNJlWC1xzt1hiSHavhVyhdxKqcCQgDjrPxbYDOVBCIHGpVcacLsfzj82j8RgS9xJWyGUPHe_tcs-vajOX30SzVdvrsdmF2TI1VACxb7MR11z8RUO-SBw.jpg?r=151",
      },

      {
        Title: "The Umbrella Academy",
        Genre: "Coming Soon",
        Description:
          "Reunited by their father's death, estranged siblings with extraordinary powers uncover shocking family secrets -- and a looming threat to humanity.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABarewCd9OBUnSRPRMTTjqguU7rYx7e5tcJWDT-s0Lb9sVoN8q2D7AtgoP-r-qQYNZPTe_DoBtwdTtBrM6oZwTbS-BMlrP2XueCEBFx5mYCuO_fKTzpKSylP5JdM7-9cCIBlgcZZQnlE9eD5-2Y9NQ6VWQGEGIcKlSsis_n5mL5-xJAmhxwzR-NYq6ui26MM1GAofXu7IeUe80TuYnWP_dHPXnJTi0vgD.jpg?r=578",
      },

      {
        Title: "Lucifer",
        Genre: "Coming Soon",
        Description:
          "Bored with being the Lord of Hell, the devil relocates to Los Angeles, where he opens a nightclub and forms a connection with a homicide detective.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQc9mGMmWNlLkhWh5Si5F-XFG_SHfCRQhpf39-Ukp_AkQKMM2ZeM9xXVWiySYsEKDeGd4EhqLeWsEa-BPCn60exgBfhOw284HTrowmh0Bp0jn-uIQlu9jEJ4eODkWIzit1Xz.jpg?r=31e",
      },

      {
        Title: "Man vs Bee",
        Genre: "Coming Soon",
        Description:
          "Bumbling dad Trevor tries to get the best of a cunning bee while house-sitting a posh mansion — but only unleashes more chaos in this comedy series.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe8OwzFiC0XhgQIHiut7sZTawfnUw80fGZm_-xiJ3smwtRMYxaKDLqeinR75kVZNMcBETg-vKk2Us9HvFLOQVbZr2Ju_vNY2bz4dJqJyX95ol1C_3cFsrbA8cd9l4HCJKO3q.jpg?r=e47",
      },

      {
        Title: "Stranger Things",
        Genre: "Coming Soon",
        Description:
          "Terror reigns in the food court when the Mind Flayer comes to collect. But down below, in the dark, the future of the world is at stake.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABafJKGv49lcphk3HsZbsZ7dDxSgq0cxQQEG_BIp1lWDRxfdz7l4dlBFHeB7nqU0ahJzwROVl9hfcFEsECyp-nZdZ_Dla_RuqeGqdgnqhpavOrDwx2mZmKe6EvK8UfCB7NL4hf6kmnvyJcreGgfNbIhXNdiVTmNO5zQ0A-09PdCsNbTrKTv7EB93KzI9bZeLLw48LvH1ubxlzaeKZhfvh3Qh2CjVFtqeU.jpg?r=f3e",
      },

      {
        Title: "Red Notice",
        Genre: "Coming Soon",
        Description:
          "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZNwIHlbdFSzxgKj5KKlnfdZBOmhV4khzRb9zzGWD6ztr2utcjjNEDlFrFeuYMRXhqiYi8VsVx_kTOYrhjLhOZFso9Q7Zwye1FuJqN88tGb711jeZhNwcjKuXkCa-kON9GaC.jpg?r=347",
      },

      {
        Title: "6 Underground",
        Genre: "Action",
        Description:
          "After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRCwkv7ovg_GuhHQqL3WCnHya6gJatS-Y0ZxoLQf17BJGReRI0zozcq6YUr5SKEafNhSS4awulJ3u2XArM3APKzN9H1sMAQldCiMPV3x2LB-UOcG6RFwfK9kyWNQxTxZCkL1.jpg?r=2ee",
      },

      {
        Title: "Anaconda",
        Genre: "Action",
        Description:
          "A documentary film crew on a boat in the Amazon picks up a mysterious stranger who dupes them into pursuing a monstrous and deadly 40-foot-long snake.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW7LtjWNq_3stuNO4P0dbER0MrVXzg-SI3QIUoBDKWJ-I1ihZaPRBODllJg8sg4_zPGQ4iX47LyqUc0eMzdcJDKzxrp8gTkvqmU.webp?r=487",
      },

      {
        Title: "Army of the dead",
        Genre: "Action",
        Description:
          "After a zombie outbreak in Las Vegas, a group of mercenaries takes the ultimate gamble by venturing into the quarantine zone for the greatest heist ever.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYBoZHT0SM7sR0_74pTixSl9wXT8ryczJ-Kl4X_0XpcgwHX1q1p85nTISzsxz7f9F0pljBD6xXEpEb3k8km9ScF5PsoIMF5UIzgMU_Hc88S37zMVOjRa2NCNHRdDcWCGjIgG.jpg?r=9e0",
      },

      {
        Title: "Polar",
        Genre: "Action",
        Description:
          "An assassin on the verge of retirement must put the good life on hold when his greedy boss sends a squad of young, ruthless killers to take him out.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdo65tB97bV5lWroA9_3HydZ8av9cJnjy0r2QHclqN5KTKWNQ1fZ5rQyx9DZU1oMO1bzaPe3vYsRlpicjELLVugbaqaz1sg8OpzqQn_1XUGaTkfUhtp_RZAb2QWIAtnPiNNV.jpg?r=b62",
      },

      {
        Title: "Kate",
        Genre: "Action",
        Description:
          "Slipped a fatal poison on her final job, a ruthless assassin working in Tokyo has less than 24 hours to find out who ordered the hit and exact revenge.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbis12DteXXjJo7j9ditv1lKMYY-5zDnmf_uqEp9Xid7zds_vIzrd7Bc59Pbwq1MByikR0FCkD4q9uWf9oWOXOJSa-YuY65APd1ksugKHEx9WXKc_Sa9HWgzFMOkftDxVtWU.jpg?r=99d",
      },

      {
        Title: "Revenger",
        Genre: "Action",
        Description:
          "Hell-bent on avenging the murder of his family, a former detective infiltrates a remote island that serves as a prison for vicious death row criminals.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWVqaVMN7EXqOmukkxrH7rI02UVjtbGtPrKbo5VIuBhHwQzzzBlXwxhasVRprN5HtAp6PCHCgInQ5lCets72azedNT3WgYo35ZbgfdXsu2E0jcJbPETkKWfwewc71rfhN4NN.jpg?r=390",
      },

      {
        Title: "Project Power",
        Genre: "Action",
        Description:
          "An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT3-8qznDgNGOJpVLZQp5zqfkkObG8EYjMWVP-tlhIB3i_rUVSxAB8X1ng4MDZ4SnGbBR-5349Vdb9GaJtOZBAkbQkNsAYuA6iNiqmNvOF1WaaEik55kVYwqcy7asbDYGW3_.jpg?r=2ba",
      },

      {
        Title: "Fatherhood",
        Genre: "Drama",
        Description:
          "A widowed new dad copes with doubts, fears, heartache and dirty diapers as he sets out to raise his daughter on his own. Inspired by a true story.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRjWCqHZ4dXw_7AKrt5lpBYg4_sAnJyRiM7JQTxXaNA_HHDIuhJXJpauw3FCxEsgI5Fn2FaieuFAlHB__YNv8JA79nG3PumIglMJ5JyvNy9h60VS8sSJsXtWmyy_SGrBefpq.jpg?r=182",
      },

      {
        Title: "Dangerous Liaisons",
        Genre: "Drama",
        Description:
          "Book smart Célène falls for bad boy Tristan at her new Biarritz high school, unaware she's part of a cruel bet he's made with social media queen Vanessa.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX96Cp_1CbRhbKgL6ofcot_ytY7HvNm0vJfFkWyJTb_K4exM43mMdTe-wmhBzgFWKavRcMGcmw3CYUBOu0ANyAGcY0P_Tv0kF038JiVBNtiJ9NSX70AUXt49v74AMz7CQlNqiyEvGGmVu7ave-ZdUl4R8_k-wjGlV76QZ-uLfJhE84x-V2VA_86FwA9-WIM.jpg?r=d9b",
      },

      {
        Title: "The InBetween",
        Genre: "Drama",
        Description:
          "After losing the love of her life in a tragic accident, a brokenhearted teen begins to believe that he's sending her signs from beyond the grave.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb5L8cDtIU8b8WBtp1IE5E58nzMRhhaiSRuU2LFAJicMVBQ3Do_hb8XwQ1viW9U8BHTzUFwL3YZd8fSag1NWEfKTz0Xw89HCvc4f1bHNLeO_5MyFPr2Z_yuL7FFZsv1e-h76.jpg?r=495",
      },

      {
        Title: "All The Bright Places",
        Genre: "Drama",
        Description:
          "Two teens facing personal struggles form a powerful bond as they embark on a cathartic journey chronicling the wonders of Indiana.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX3V2XdDuYpewKGqe4RF9gsrOJVWiNA7FM1gqXedq7FYtNUoHS5BDEvFlaQmA8WPbC2Xn35FfikmTCjivBZPMPLBhJd2vg6zdFP8aRlX1-UEEtD7iQ3ftRji5sWa9HnVcBH5.jpg?r=ee1",
      },

      {
        Title: "You Get Me",
        Genre: "Drama",
        Description:
          "After a one-night stand, Holly develops a dangerous obsession with Tyler and transfers to his high school, desperate to keep their 'romance' alive.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSmBgUOvhwQbVRPgv9l7f-EWzxHRl5T4UDQILsiHFjZPCNa_U407fkeABbjM_SYT3brGNv75iNHP0c1n1aqRKNVNCzrhpxlXgjUzLzcqj8pDCMZsTK4OFu7ALgjmSwjLA1Qf.jpg?r=296",
      },

      {
        Title: "Kidnapping Stella",
        Genre: "Drama",
        Description:
          "Snatched off the street and held for ransom, a bound and gagged woman uses her limited powers to derail her two masked abductors' carefully laid plans.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUJGproR4Fsr8lepw3HdbSf0lzzJY5GrXtMDLS4f7gKmVuPB28MXuH4dEsxlfg2FK46NBPzFtQbAu141CJVfvms0zxfSIv4sDs1UdQJkODbMfdF7p57eOB5grV42zeVq7syl.jpg?r=274",
      },

      {
        Title: "The Forest of Love",
        Genre: "Drama",
        Description:
          "A con man and a would-be filmmaking crew force themselves into the lives of two grief-scarred young women. But nothing is as it seems.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZZOKB7n0e-nJIJBqJ4gmOiF3caEftPAncR_r96maUPo8UwcPvtwiXnpZALg2hrWxLipyTvY_UYVdmNuF5nHcEMaldyu-pV1l1NIMkDE_f1xjJKTdZzjSMnh4iSvz1ZSRs3A.jpg?r=854",
      },

      {
        Title: "Kangaroo Jack",
        Genre: "Comedy",
        Description:
          "Two boyhood pals sent to Australia to deliver $50,000 of mob money are forced to pursue a runaway kangaroo when the critter runs off with the cash.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWc50wcCBcZdOt-PWHdvBxaW9HyAznlldWsBuIXU1i7CsxRUXA7-Ta-qgKTbqugf_TQl7nIquy6YrkbsR52IIqPuB759orksULA.webp?r=a77",
      },

      {
        Title: "Trailer Park Boys",
        Genre: "Comedy",
        Description:
          "Follow the booze-fueled misadventures of three longtime pals and petty serial criminals who run scams from their Nova Scotia trailer park.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXQJlttKX7CBkOU2k6SPKRcNhkdlAYoWQVumscYkyIaQxWl618CkOgT8XfHu6PlYIwtinm22iFdL3KgJEHb-fohgszER2eO8xMA.webp?r=6d5",
      },

      {
        Title: "BoJack Horseman",
        Genre: "Comedy",
        Description:
          "Meet the most beloved sitcom horse of the '90s, 20 years later. He is a curmudgeon with a heart of...not quite gold...but something like gold. Copper?",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfeWdnJTnsd9RimWfONfQjON6tKSr6i2hfepzq0hLc8FR7rzAtHTmKZzzGFTvlyHYOSp0Waeq9xBJIcbLzT4s6-JEmk6Dkq-827vDzpWPugFaogQxg_R97uyQAMo1B9yKyl1.jpg?r=37e",
      },

      {
        Title: "Dead to Me",
        Genre: "Comedy",
        Description:
          "A hotheaded widow searching for the hit-and-run driver who mowed down her husband befriends an eccentric optimist who isn't quite what she seems.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaayarMQSEmZ9N28vKUhxVZleV8wDTZpl3Kgvb71b7L17EgpC6UAlaZtu8XJF8hqmHTIvVq9P0Dag9uoDRo5GIoGkCgJZYHxB1hK_GdamjMfnX81Pf8a0BlMHsuwIOjeo2a3.jpg?r=ab0",
      },

      {
        Title: "Russian Doll",
        Genre: "Comedy",
        Description:
          "Nadia keeps dying and reliving her 36th birthday party. She's trapped in a surreal time loop -- and staring down the barrel of her own mortality.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXHO-ebgGk3da_kZmWNhfP6iwF2jQ1MHwxAsg_j0ISuNBca3kM5HA4bVNW3LoKPpR7G6zCmFbvSkYOFkZ7nEU_rZcFcKc9fUrdQG-LkgGROz9rDdc1HYkqClEQahRqN8pygt.jpg?r=1c5",
      },

      {
        Title: "Crash Landing on You",
        Genre: "Comedy",
        Description:
          "A paragliding mishap drops a South Korean heiress in North Korea -- and into the life of an army officer, who decides he will help her hide.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU-LGWGxCAQKdhK_n1jdUAq80f-Mqcx7UNFU8LEKOq5XhX_LVVeNwWVWA2T8Kw9YqGJzWaenW9_qRaU0lk0TPApsQgBwPFhmRoFQMIlCHQJFhMiTr60mLHTR006uzwy_Y7Mf.jpg?r=443",
      },

      {
        Title: "Dear White People",
        Genre: "Comedy",
        Description:
          "Students of color navigate the daily slights and slippery politics of life at an Ivy League college that's not nearly as 'post-racial' as it thinks.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRCh9RbpAOfJuQqXCoxK6IYCXSy01RNhn338o0RT54Wz_6ZTcGd3jHPLKiDGaHZTJUrJ9TNUeEgDvCjK6i02ZDT-lcZHRUL0dOmyBgWv5kSaCrS59qX2-7uCXtI_Ov7_Eu9v.jpg?r=f96",
      },

      {
        Title: "CoComelon",
        Genre: "Kids",
        Description:
          "It's time to sing along with J.J. and the gang! This kid-friendly playlist includes Wheels on the Bus, Hey Diddle Diddle, This Is the Way and more.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVTLQW4E66om9Ejo3j384uZvjdWRciwUMUCQPnxNUCPu3DfR3AXD5_B4k7xUVNmBw1FMSg8IRf8bm5CpjVcx2L44WzHTcC0jqoVrgoTvTG8w9685FyMPrM15n7LOoE69XNm44AU7wWqi-PTCpwV7Waw5Zxw8-MRjQ4Q.webp?r=edd",
      },

      {
        Title: "SharkDog",
        Genre: "Kids",
        Description:
          "He's a cute puppy and a hungry underwater hunter! And Sharkdog's friendship with human pal Max is full of fun!",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVP9qqoHBbTCadDjCb4m4dOYVqo9mBwf8j4LFbDBYrK_zUqr9cKI5SsHiWNUnvxG1k8xdEUbXm9YpMLrLfweJNSAQrQ3cGdcvzf2ilRHlijndNol_Gb6kKBnGjynTXtYrI4OJ3uNFmfMPZy3HhuNfN-Pz62x5pzQPa7GFg.jpg?r=dc7",
      },

      {
        Title: "Gabby's Dollhouse",
        Genre: "Kids",
        Description:
          "Cute cats, quirky crafts and colorful magic! Join kitty enthusiast Gabby and her sidekick Pandy Paws as they team up for a series of animated adventures.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY5e7UopYIMIof6QCeC4bvQ3jOSjXtfQPk_t8DC3OFkjumKgVEV-N5X1GuUv3ryj1UeKyl-wBg_D-1RCGgJzYa_W9b7qLgfScKTqpUkhIwTZV3ji-gG7UICEI9d94DRhmsl4.jpg?r=7e8",
      },

      {
        Title: "Action Pack",
        Genre: "Kids",
        Description:
          "With hearts, smarts and superpowers, the heroic kids of the Action Academy work together to battle the baddies — and even bring out the good in them!",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVjaKc7diwzP3J2agmTWpqfMYNKg2dT4ktHGuXPqaEFpsOrd56DewsZ3ez7ONS16m7jwi8sf0wDDmiCCIq6ZwM4utP-YDKS3WX1ocAoL0AyrmLjEp4CQGVPB8abCRTrPy-79.jpg?r=2a7",
      },

      {
        Title: "Word Party",
        Genre: "Kids",
        Description:
          "Meet Bailey, Franny, Kip and Lulu. They're adorable baby animals, and they want you to join the party and help them learn!",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbxI9CSFAmVUkhI_5aWVs7-L5eMgdssZvBKKNUC2G2fAWeQ7bSTm36Ht2a3xwnc8-X6inQ63M49p1IkIajz-MERenOGwy7UTAWGvjFhO-T-x7h8q8S0oN_afFian2J5JFyu1.jpg?r=907",
      },

      {
        Title: "Boss Baby",
        Genre: "Kids",
        Description:
          "The Boss Baby brings his big brother Tim to the office to teach him the art of business in this animated series sprung from the hit film.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcwXN419CZ_TGT5674x6AoeWENlwI39c4k42kRBkbatuE7hthC5j-U_yVvSlud4jN_py6BLRlE0YMDnCHKNpIgllHQPpZt7XtXREmp4HqjHYWYkHqXCurV0ZrMmQggwhmA0R.jpg?r=e14",
      },

      {
        Title: "Pup Academy",
        Genre: "Kids",
        Description:
          "Furry friends take a re-bark-able journey in this series about an extraordinary school for the cutest, cuddliest and most curious puppies.",
        image:
          "https://occ-0-2640-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdjg7-JzKyFNwMHvcyR7FC7kNNxqOzcU9q_LssYgXzx5RzAkbYqeuIgHXTV6aNdpM__1_sMUIr_Wzy-N20IOPVSAZbXPO5b1ZayBw3QwgxNAQQqew8NTgs4fMofjzwRYuc9x.jpg?r=7ca",
      },
    ],
  },

  computed: {
    filteredMoviesTitle() {
      let filteredMoviesTitle = this.movies.filter((movie) => {
        return movie.Title.toLowerCase().includes(
          this.searchInput.searchText.toLowerCase()
        );
      });

      return filteredMoviesTitle;
    },

    filteredMoviesComingSoon() {
      let filteredMoviesComingSoon = this.movies.filter((movie) => {
        return movie.Genre.toLowerCase().includes("Coming Soon".toLowerCase());
      });

      return filteredMoviesComingSoon;
    },

    filteredMoviesAction() {
      let filteredMoviesAction = this.movies.filter((movie) => {
        return movie.Genre.toLowerCase().includes("Action".toLowerCase());
      });

      return filteredMoviesAction;
    },

    filteredMoviesDrama() {
      let filteredMoviesDrama = this.movies.filter((movie) => {
        return movie.Genre.toLowerCase().includes("Drama".toLowerCase());
      });

      return filteredMoviesDrama;
    },

    filteredMoviesComedy() {
      let filteredMoviesComedy = this.movies.filter((movie) => {
        return movie.Genre.toLowerCase().includes("Comedy".toLowerCase());
      });

      return filteredMoviesComedy;
    },

    filteredMoviesKids() {
      let filteredMoviesKids = this.movies.filter((movie) => {
        return movie.Genre.toLowerCase().includes("Kids".toLowerCase());
      });

      return filteredMoviesKids;
    },
  },

  methods: {
    theSearch() {
      let input = document.getElementById("searchText").value;
      if (input === "") {
        alert("Enter Some Text");
        this.searched = this.searched;
      }
      else {
        this.searched = !this.searched;
      }
    },

    addToWatchList(event) {
      let watchList = JSON.parse(localStorage.getItem("Movies"));
      for (let i = 0; i < watchList.length; i++) {
        if (watchList[i].Title == event.Title) {
          this.InList = true;
        } else {
          this.InList = false;
        }
      }

      if (this.InList == true) {
      } else {
        if (watchList.length < 20) {
          watchList.push(event);

          localStorage.setItem("Movies", JSON.stringify(watchList));
        } else if (watchList.length >= 20) {
          this.fullList = true;
          alert("Watch List Full!");
        }
      }
    },
  },
});
