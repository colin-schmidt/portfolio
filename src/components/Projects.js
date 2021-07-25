import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div class="container" style={{ marginTop: "10rem" }} align="center">
      <h1 id="projects" style={{ textAlign: "center", marginBottom: "4rem" }}>
        Projects
      </h1>
      <div class="row">
        <div class="col">
          <ProjectCard
            thumbnail="https://lh3.googleusercontent.com/Rl5IVlOS0z6vpmqng6579Llr-p55Os6Jd2jb60C7MXP_nNF7L5lAVaIDw6bsii3wgVbiPjeZuDPEeHN0M7coWLC-MVcYPHG2L7JfV3757zK62tCQVGE5ONu5fj0LvDbiy-lQgDAT8g7gc93DINzmb2BrSdSUpV6yJmsqY0g3Vg-UYnreTBC9JdgFBgpUnUMqoo6O1JmugVTcxuDAITjzbJ10m-zESfptKX0nCla2x_knKgIygCfbMJti7eilWIW37_DJ7ev6zD3wR7SDkV5AYdMGG9szFr1sVMX_-y3BV7aDU4KP5gTrp1ssVmTT8vVjLB3RdXaPVvK4wNxJPMbe8Gh2XnW7k-vgtuXm7U9lQI7L6FPc-3ycrpZZTXJQLkEJuuI3GTMxvtcOkWB5NmK2lHfO2v8ExiYNAZDoaLXlguRbCC5nXyLvcsy7cqrw-70ooJwSkCuSbFwJN1t3CI4kkWy0HDZj7_KqCjaHM6ANPQFW_6L-H9EnxilRwLJ_nNawihewdkAuVxBKlZc_BOjTwrMNshrJIvry6NuBa_L77mekyRZMFxyaby8Rag42fIx78W2gop0nvdb5LOI4Kx8NKwGiDVqRrdu2mdsFnFmocFWumAJb9WX1M-R_6mQYKrxDhDI0bYaloi_qNAbvow1fIYcr8K93XOqvWh-xATR9f1xZ6BUkeXwfTMrIsdqU8-H6Ng2ZnBEPTLpajgM0f3e-_65l=w958-h437-no?authuser=0"
            title="JavaScript Documentation"
            description="A single-page site with JS documentation taken from MDN."
          />
        </div>
        <div class="col">
          <ProjectCard
            thumbnail="https://lh3.googleusercontent.com/EySaPjBdjzOj2zLQC0YjER79BxC9EU1ISRF8C48pt5p2LvBfolZunMNBcve5JMSyQyUdvHlEBhTZ3fyLzkv1e6fV6sBEuvpbuuyguhEKtXvyuHau2m1K9JlIKSfTspm2ROQEVo0Ut7wEfuZH7MlGbNHk3-HG1frS-rIZcJAWHs4P53M1o3Z9D1XJZqXcVt4ofVrojJqoFa4Dzr1ZjRxtJbVPcLr-0GEWio80YfmQ9b2N2rcgIAAMP9ZKL5wgM0VpHNLc58Vf_uDPROgQhPllizYa1NVnYB17FpL6_ygh3Y9PX47Ypc4k4D3Zrl64Cb0EVDUNZaD_yp27SSOEf6wfRmQ9g9sFOQjKBGMpYINAO1eGs9ItBVNyCmMXKfJuJO2_sLQvt51ZyJ2fTckiaEAnmphDSfUOlPEdrCBvSvEb80c9-lWi0z4CaaQUMCbyOSGtj199DjggOIjT9WOPgoZZ32I0zmlmqtC7mfYVDXyJ7fq9ri1TIcCg5VlSuEfnDAdc110SbURFiXqpkYmbXUGFj6z1J96TSmHnb7zfuIz9-rdjqIlS4NtTyG3g1y-ZUeQnVkCIMQWSJh49157Hyqpb7vkeRAkiUL52ZRNWPl1s_mA53IMwFEODf4IlXRqh8j4aUMPfScbXprfJO-xS-VJE20CgGPUcB9iFEWpFfqt3H8rrIF91-ZRJk0gHybJYhcF7qNuVvBwEe-tfH-ZI5SWyCRNr=w958-h461-no?authuser=0"
            title="Storefront Landing"
            description="A storefront landing page featuring an embedded YouTube video."
          />
        </div>
        <div class="col">
          <ProjectCard
            thumbnail="https://lh3.googleusercontent.com/8ri2k9s4SAVDKaDRjAPSlTWBqQFtQFN6yjaa_0hD9Bkpe4vbXZKdckynk9quK2aO4g8xlDsOWJzuRUqadVVMqgJwfEQB3py3VQc1JmSmk7n3D2t77kR4A8VTqK6tlShq49dczz-BnAda0qblEpiaUmlHI-J5CBkVKxfXvpQVKveREbbcBZPoUb2gN8GG9j9COLVaBQT_qWRpIPDHjZ2TKe6rvWMuQ0sY3ilOmVMQhXiOvYqMK8TK4aNl2XF2fAaOr-jHyCIf4Vu8UexbNdDuDozisGLd3j60DT5EVNpCyvnUdHRKlfv9i6t4rjtokwQAZlIq-lkjoib7WiypTSyoS5wcDR_zcd6brX57vFdZfJk4I8Oj0Svw5uCqEQIQAL67N4b8hlTSDDh1oj1OfulRvym84snu9koUB1_Fo_t0hn_3CPLC9e-hZye8cJeAKgZarAz5MttzEUuJoS3WsmRdy9zoWh6D7lnCX1JHBxrwZq6k5tTMnlPYb6YUvDB2eB5qYRKcqTtnZI7DrCwtHYTklgCb1wHlTly7KnPxjprH8PTocAky_GD_s5rrGN33H3LXFPkQzkd-kkhCPu0MZvuewfSpzE9J-mbJ3BVosZqPYGicK4oKOsWtFmzD0aQ1qX1v1Fm9w-yIHHs5HKUirl96Jfrik4Q9vBCn4y1MhlU5W10QkJWf2KMq5Q_TWmENbe2ndYA1s164MR611Iu2yvUQBjWG=w958-h469-no?authuser=0"
            title="Tribute"
            description="A tribute biography page about the inventor of the Super Soaker."

          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ProjectCard
            thumbnail="https://lh3.googleusercontent.com/Rl5IVlOS0z6vpmqng6579Llr-p55Os6Jd2jb60C7MXP_nNF7L5lAVaIDw6bsii3wgVbiPjeZuDPEeHN0M7coWLC-MVcYPHG2L7JfV3757zK62tCQVGE5ONu5fj0LvDbiy-lQgDAT8g7gc93DINzmb2BrSdSUpV6yJmsqY0g3Vg-UYnreTBC9JdgFBgpUnUMqoo6O1JmugVTcxuDAITjzbJ10m-zESfptKX0nCla2x_knKgIygCfbMJti7eilWIW37_DJ7ev6zD3wR7SDkV5AYdMGG9szFr1sVMX_-y3BV7aDU4KP5gTrp1ssVmTT8vVjLB3RdXaPVvK4wNxJPMbe8Gh2XnW7k-vgtuXm7U9lQI7L6FPc-3ycrpZZTXJQLkEJuuI3GTMxvtcOkWB5NmK2lHfO2v8ExiYNAZDoaLXlguRbCC5nXyLvcsy7cqrw-70ooJwSkCuSbFwJN1t3CI4kkWy0HDZj7_KqCjaHM6ANPQFW_6L-H9EnxilRwLJ_nNawihewdkAuVxBKlZc_BOjTwrMNshrJIvry6NuBa_L77mekyRZMFxyaby8Rag42fIx78W2gop0nvdb5LOI4Kx8NKwGiDVqRrdu2mdsFnFmocFWumAJb9WX1M-R_6mQYKrxDhDI0bYaloi_qNAbvow1fIYcr8K93XOqvWh-xATR9f1xZ6BUkeXwfTMrIsdqU8-H6Ng2ZnBEPTLpajgM0f3e-_65l=w958-h437-no?authuser=0"
            title="JavaScript Documentation"
            description="A single-page site with JS documentation taken from MDN."
          />
        </div>
        <div class="col">
          <ProjectCard
            thumbnail="https://lh3.googleusercontent.com/EySaPjBdjzOj2zLQC0YjER79BxC9EU1ISRF8C48pt5p2LvBfolZunMNBcve5JMSyQyUdvHlEBhTZ3fyLzkv1e6fV6sBEuvpbuuyguhEKtXvyuHau2m1K9JlIKSfTspm2ROQEVo0Ut7wEfuZH7MlGbNHk3-HG1frS-rIZcJAWHs4P53M1o3Z9D1XJZqXcVt4ofVrojJqoFa4Dzr1ZjRxtJbVPcLr-0GEWio80YfmQ9b2N2rcgIAAMP9ZKL5wgM0VpHNLc58Vf_uDPROgQhPllizYa1NVnYB17FpL6_ygh3Y9PX47Ypc4k4D3Zrl64Cb0EVDUNZaD_yp27SSOEf6wfRmQ9g9sFOQjKBGMpYINAO1eGs9ItBVNyCmMXKfJuJO2_sLQvt51ZyJ2fTckiaEAnmphDSfUOlPEdrCBvSvEb80c9-lWi0z4CaaQUMCbyOSGtj199DjggOIjT9WOPgoZZ32I0zmlmqtC7mfYVDXyJ7fq9ri1TIcCg5VlSuEfnDAdc110SbURFiXqpkYmbXUGFj6z1J96TSmHnb7zfuIz9-rdjqIlS4NtTyG3g1y-ZUeQnVkCIMQWSJh49157Hyqpb7vkeRAkiUL52ZRNWPl1s_mA53IMwFEODf4IlXRqh8j4aUMPfScbXprfJO-xS-VJE20CgGPUcB9iFEWpFfqt3H8rrIF91-ZRJk0gHybJYhcF7qNuVvBwEe-tfH-ZI5SWyCRNr=w958-h461-no?authuser=0"
            title="Storefront Landing"
            description="A storefront landing page featuring an embedded YouTube video."
          />
        </div>
        <div class="col">
          <ProjectCard
            thumbnail="https://lh3.googleusercontent.com/8ri2k9s4SAVDKaDRjAPSlTWBqQFtQFN6yjaa_0hD9Bkpe4vbXZKdckynk9quK2aO4g8xlDsOWJzuRUqadVVMqgJwfEQB3py3VQc1JmSmk7n3D2t77kR4A8VTqK6tlShq49dczz-BnAda0qblEpiaUmlHI-J5CBkVKxfXvpQVKveREbbcBZPoUb2gN8GG9j9COLVaBQT_qWRpIPDHjZ2TKe6rvWMuQ0sY3ilOmVMQhXiOvYqMK8TK4aNl2XF2fAaOr-jHyCIf4Vu8UexbNdDuDozisGLd3j60DT5EVNpCyvnUdHRKlfv9i6t4rjtokwQAZlIq-lkjoib7WiypTSyoS5wcDR_zcd6brX57vFdZfJk4I8Oj0Svw5uCqEQIQAL67N4b8hlTSDDh1oj1OfulRvym84snu9koUB1_Fo_t0hn_3CPLC9e-hZye8cJeAKgZarAz5MttzEUuJoS3WsmRdy9zoWh6D7lnCX1JHBxrwZq6k5tTMnlPYb6YUvDB2eB5qYRKcqTtnZI7DrCwtHYTklgCb1wHlTly7KnPxjprH8PTocAky_GD_s5rrGN33H3LXFPkQzkd-kkhCPu0MZvuewfSpzE9J-mbJ3BVosZqPYGicK4oKOsWtFmzD0aQ1qX1v1Fm9w-yIHHs5HKUirl96Jfrik4Q9vBCn4y1MhlU5W10QkJWf2KMq5Q_TWmENbe2ndYA1s164MR611Iu2yvUQBjWG=w958-h469-no?authuser=0"
            title="Tribute"
            description="A tribute biography page about the inventor of the Super Soaker."

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
