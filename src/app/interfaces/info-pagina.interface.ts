export interface InfoPagina {

  /* Agrego un ? para que cuando esto llegue al info-pagina.service 
  llegue como opcional, puede llegar o no */
  titulo?: string;
  email?: string;
  nick?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tumblr?: string;
  equipo?: any[];

}
