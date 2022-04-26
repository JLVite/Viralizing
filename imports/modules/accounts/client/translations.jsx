export default {
  en: {
    edit: {
      tabs: {
        concept: {
          title: 'Concept',
          instructions: 'Fill in the following fields.',
          form: {
            description: 'Description fo the person/character/concept',
            occupation: 'Occupation',
            profession: 'Profession',
            subjects: {
              primary: 'Primary Subjects',
              secondary: 'Secondary Subjects',
              forbidden: 'Forbidden Subjects'
            },
            keywords: 'Keywords',
            likes: 'Hobbies & Likes',
            motivations: 'Motivations'
          }
        },
        gallery: {
          title: 'Gallery',
          images: {
            title: 'Images',
            newAlbum: {
              title: 'Enter your Album Name',
              confirm: 'Add Album',
              cancel: 'Cancel'
            },
            empty: {
              message: 'You have no pictures yet.',
              button: 'Upload Picture'
            },
            list: {
              newImage: 'Add Picture',
              newAlbum: 'Add Album'
            },
            delete: {
              albumHelper: 'Delete Album',
              title: 'Are you sure?',
              description: 'You won\'t be able to revert this!',
              confirm: 'Yes, delete it.',
              cancel: 'Cancel'
            }
          },
          videos: {
            title: 'Videos',
            newAlbum: {
              title: 'Enter your Album Name',
              confirm: 'Add Album',
              cancel: 'Cancel'
            },
            new: {
              title: 'Enter your video URL',
              confirm: 'Add Video',
              cancel: 'Cancel'
            },
            list: {
              newVideo: 'Add Video',
              newAlbum: 'Add Album'
            },
            empty: {
              message: 'You have no videos yet.',
              button: 'New Video'
            },
            delete: {
              albumHelper: 'Delete Album',
              title: 'Are you sure?',
              description: 'You won\'t be able to revert this!',
              confirm: 'Yes, delete it.',
              cancel: 'Cancel'
            }
          }
        },
        information: {
          title: 'Information',
          instructions: 'Enter your personal information in the following fields.',
          form: {
            name: 'Name',
            surname: 'Last Name',
            save: 'Save',
            gender: {
              label: 'Gender',
              values: {
                male: 'Male',
                female: 'Female'
              }
            },
            birthDate: 'Birth Date',
            maritalStatus: {
              label: 'Marital Status',
              values: {
                single: 'Single',
                married: 'Married'
              }
            },
            forbiddenSubjects: 'Forbidden Subjects',
            country: 'Country',
            city: 'City',
            languages: 'Languages',
            sexualOrientation: {
              label: 'Sexual Orientation',
              values: {
                heterosexual: 'Heterosexual',
                homosexual: 'Homosxual',
                bisexual: 'Bisexual',
                transexual: 'Transexual'
              }
            },
            likes: 'Likes',
            categories: 'Categories',
            specialties: 'Specialties',
            description: {
              label: 'Description',
              description: 'Add a description of your person, character or brand.'
            },
            urlTitle: 'Enter your websites.',
            url: 'URLs',
            proposal: {
              categories: {
                label: 'Propose categories',
                placeholder: 'Propose your category'
              },
              specialties: {
                label: 'Propose specialties',
                categories: 'Select a category',
                placeholder: 'Propose your specialty'
              },
              modals: {
                error: {
                  title: 'Error',
                  description: 'There was an error in your request. Please contact customer support.'
                },
                done: {
                  title: 'Done!',
                  description: 'Thanks for your proposal'
                }
              }
            }
          },
          helpers: {
            noSelect: 'Not Selected'
          }
        },
        target: {
          title: 'Target/Objectives',
          instructions: 'Please enter your audience\'s information',
          form: {
            age: {
              label: 'Age',
              helper: 'years'
            },
            gender: {
              label: 'Gender',
              values: {
                male: 'Mostly Women',
                female: 'Mostly Men',
                split: 'Equally Men & Women'
              }
            },
            nrssg: {
              label: 'Socioeconomic Status',
              values: {
                a: 'A',
                b: 'B',
                c1: 'C1',
                c2: 'C2',
                d: 'D',
                e: 'E'
              }
            },
            countries: {
              all: 'All',
              label: 'Country'
            },
            cities: {
              all: 'All',
              label: 'Cities'
            },
            languages: {
              all: 'All',
              label: 'Languages'
            },
            description: {
              label: 'Description',
              placeholder: 'Add a brief description about the profile of this audience.'
            },
            all: 'All',
            objectives: {
              increaseFollowers: 'Increase followers',
              increaseViews: 'Increase visits',
              increaseShares: 'Increase post\'s shares',
              increaseEngagement: 'Increase engagement',
              increaseLikes: 'Increase Likes',
              increaseTrafficHours: 'Increase hours of traffic to profile',
              reachNewMarkets: 'Reach new markets',
              increaseSpeaking: 'Increase the number of people that speak about you',
              increasePlays: 'Increase video playbacks',
              increaseWebsiteTraffic: 'Increase website traffic',
              positionTarget: 'Position your brand in target marker',
              keepTarget: 'Keep your market position',
              presence: 'Have more presence with followers',
              positionNewMarkets: 'Position your brand in new markets',
            },
            proposal: {
              objectives: {
                placeholder: 'Propose a new objective'
              },
              modals: {
                error: {
                  title: 'Error',
                  description: 'There was an error in your request. Please contact customer support.'
                },
                done: {
                  title: 'Done!',
                  description: 'Thanks for your proposal'
                }
              }
            }
          },
          sections: {
            own: {
              title: 'Audience',
              description: 'Please describe your audience.'
            },
            target: {
              title: 'Target',
              description: 'Please describe the target you wish.'
            }
          },
          helpers: {
            noSelect: 'Not Selected'
          }
        },
        pricing: {
          title: 'Pricing',
          instructions: 'Posts Pricing',
          form: {
            hour:'Hour without publishing',
            day:'Day without publishing',
            values: {
              account: 'Your account has an approximate value of:',
              post: 'Your posts have an approximate value of:'
            },
            post: 'Post',
            profilePicture: 'Profile Picture',
            coverPhoto: 'Cover Photo',
            noPost: {
              hour: 'Hour  Without Posting',
              day: 'Day Without Posting'
            },
            share: 'Share Post',
            partnership: 'Partnership',
            ambassador: 'Brand Ambassador',
            legend: 'All prices are established in USD.'
          }
        },
        settings: {
          title: 'Settings',
          instructions: 'Enter the following information.',
          form: {
            name: 'Account\'s Name',
            accountIs: {
              title: 'This account is?',
              brand: 'Brand',
              influencer: 'Influencer',
              badges: {
                brand: 'B',
                influencer: 'I'
              }
            },
            groups: {
              label: 'Groups',
              placeholder: 'Add Tags to order your accounts and group them.'
            },
            manager: {
              title: 'Current Manager',
              youAre: 'You are the current manager.',
              edit: 'Edit'
            },
            invite: {
              title: 'Invite to manage my account',
              send: 'Send Invite',
              placeholder: 'Email',
              success: {
                title: 'Done!',
                description: 'Your invite has been sent',
                confirm: 'Ok'
              },
              error: {
                invalid: 'The Email Address is Invalid',
                failed: 'Invite Failed',
                self: 'Can\'t invite yourself'
              },
              sent: {
                delete:{
                  label: 'Delete account',
                },
                label: 'Invite Sent To',
                delete: {
                  label: 'Delete Invite',
                  confirm: {
                    title: 'Are you sure?',
                    description: 'This action cannot be reverted.',
                    confirm: 'Yes, I\'m sure',
                    cancel: 'Cancel'
                  }
                },
                status: {
                  pending: 'Pending',
                  sent: 'Sent',
                  accepted: 'Accepted',
                  rejected: 'Rejected'
                },
                error: 'Invite Delete Failed',
                success: 'Invite Deleted'
              },
              shares: {
                title: 'Share this account with other users',
                current: 'Shared with',
                pending: 'Pending invites',
                form: {
                  title: 'New Account Share'
                }
              }
            },
            deleteAccount: 'Delete Account'
          },
          delete: {
            main: {
              title: 'Are you sure?',
              description: 'This account will be submitted for deletion after it\'s reviewed by one of our account specialists.',
              confirm: 'Yes, delete it!',
              cancel: 'Cancel'
            },
            error: {
              title: 'Error',
              description: 'There was an error in your request. Please contact customer support.'
            },
            done: {
              title: 'Done!',
              description: 'We\'ll contact you shortly.'
            }
          }
        },
        status: {
          title: 'Analytics',
          soon: {
            title: 'We are gathering your data.'
          },
          follows: {
            following: 'Following',
            followers: 'Followers',
            profileLikes: 'Profile Likes'
          },
          engagement: {
            label: 'Engagement'
          },
          posts: {
            posts: 'Posts',
            postsPerDay: 'Posts per Day'
          },
          likes: {
            likes: 'Likes',
            likesPerPost: 'Likes per Post'
          },
          comments: {
            comments: 'Comments',
            commentsPerPost: 'Comments per Post'
          },
          retweets: {
            retweets: 'Retweets',
            retweetsPerPost: 'Retweets per Post'
          },
          shares: {
            shares: 'Shares',
            sharesPerPost: 'Shares per Post'
          },
          favorites: {
            favorites: 'Favorites',
            favoritesPerPost: 'Favorites per Post'
          }
        },
        summary: {
          title: 'Summary',
          people: {
            owner: 'Owner',
            manager: 'Manager',
            shares: 'Collaborators'
          },
          information: {
            information: 'Information',
            profile: 'Profile',
            campaigns: {
              title: 'No. of Campaigns',
              labels: {
                total: 'Total',
                created: 'Created',
                partOf: 'Part of'
              }
            },
            categories: 'Categories',
            specialty: 'Specialty',
            groups: 'Groups',
            areas: 'Areas'
          },
          gallery: {
            images: 'Images',
            video: 'Video'
          }
        },
        calendar: {
          title: 'Calendar',
          publish: {
            button: 'Schedule Post'
          },
          filters: {
            all: 'All Posts',
            draft: 'Draft Posts',
            pending: 'Pending Posts',
            sent: 'Sent Posts',
            accepted: 'Accepted Posts',
            rejected: 'Rejected Posts',
            scheduled: 'Scheduled Posts',
            published: 'Published Posts',
            completed: 'Completed Posts',
            cancelled: 'Cancelled Posts',
            suspended: 'Suspended Posts'
          }
        }
      },
      saveMessage: 'Account Saved',
      saveButton: 'Save'
    },
    menu: 'Accounts',
    empty: {
      message: 'You have no accounts yet.',
      button: 'Connect Account'
    },
    connect: {
      question: 'Which social network do you want to connect?',
      message: 'If you will add a new account, Please log out the social network that you want to connect',
      account_added: 'All accounts have already been added',
      notie: {
        error: 'Failed to connect account.',
        connected: 'This account have already been connected.'
      }
    },
    list: {
      new: 'Connect Account',
      table: {
        headers: {
          owner: 'Owner',
          edit: 'Edit',
          index: '#',
          account: 'Account',
          license: 'License',
          rating: 'Rating',
          network: 'Network',
          profile: 'Profiles',
          brand: 'Brand',
          influencer: 'Influencer',
          tags: 'Groups',
          manager: 'Manager',
          collaborators: 'Shares',
          campaigns: 'Campaigns'
        },
        search: 'Search',
        empty: 'No Results'
      }
    },
    invite: {
      title: 'has invited you to manage this account.',
      accept: 'Accept',
      decline: 'Decline',
      error: {
        title: 'Error',
        description: 'This invite is intended for another user.'
      }
    }
  },
  es: {
    edit: {
      tabs: {
        concept: {
          title: 'Concepto',
          instructions: 'Ingresa tus datos en los siguientes campos.',
          form: {
            description: 'Descripción de la persona/personaje/concepto',
            occupation: 'Ocupación',
            profession: 'Profesión',
            subjects: {
              primary: 'Temas Principales',
              secondary: 'Temas Secundarios',
              forbidden: 'Temas Prohibidos'
            },
            keywords: 'Palabras Clave',
            likes: 'Gustos e Intereses',
            motivations: 'Motivaciones'
          }
        },
        gallery: {
          title: 'Galería',
          images: {
            title: 'Imágenes',
            newAlbum: {
              title: '¿Cómo se llama tu álbum?',
              confirm: 'Agregar Álbum',
              cancel: 'Cancelar'
            },
            empty: {
              message: 'Aún no tienes imágenes..',
              button: 'Subir Imágen'
            },
            list: {
              newImage: 'Agregar Imagen',
              newAlbum: 'Agregar Álbum'
            },
            delete: {
              albumHelper: 'Borrar Álbum',
              title: '¿Estás seguro?',
              description: 'No podrás revertir esta acción!',
              confirm: 'Si, eliminarlos.',
              cancel: 'Cancelar'
            }
          },
          videos: {
            title: 'Videos',
            newAlbum: {
              title: '¿Cómo se llama tu álbum?',
              confirm: 'Agregar Álbum',
              cancel: 'Cancelar'
            },
            new: {
              title: 'Introduce la URL de tu video',
              confirm: 'Agregar Video',
              cancel: 'Cancelar'
            },
            list: {
              newVideo: 'Agregar Video',
              newAlbum: 'Agregar Álbum'
            },
            empty: {
              message: 'Aún no tienes videos',
              button: 'Nuevo Video'
            },
            delete: {
              albumHelper: 'Borrar Álbum',
              title: '¿Estás seguro?',
              description: 'No podrás revertir esta acción!',
              confirm: 'Si, eliminarlo.',
              cancel: 'Cancelar'
            }
          }
        },
        information: {
          title: 'Información',
          instructions: 'Ingresa tus datos personales en los siguientes campos.',
          form: {
            name: 'Nombre',
            surname: 'Apellido',
            save: 'Guardar',
            gender: {
              label: 'Genero',
              values: {
                male: 'Masculino',
                female: 'Femenino'
              }
            },
            birthDate: 'Fecha de Nacimiento',
            maritalStatus: {
              label: 'Estado Civil',
              values: {
                single: 'Soltero',
                married: 'Casado'
              }
            },
            forbiddenSubjects: 'Temas Prohibidos',
            country: 'País',
            city: 'Ciudad',
            languages: 'Idiomas',
            sexualOrientation: {
              label: 'Orientación Sexual',
              values: {
                heterosexual: 'Heterosexual',
                homosexual: 'Homosxual',
                bisexual: 'Bisexual',
                transexual: 'Transexual'
              }
            },
            likes: 'Gustos e Intereses',
            categories: 'Categorías',
            specialties: 'Especialidades',
            description: {
              label: 'Brief Personal',
              description: 'Agrega una descripción de tu persona, personaje o marca.'
            },
            urlTitle: 'Ingresa tus páginas web.',
            url: 'URLs',
            proposal: {
              categories: {
                label: 'Proponer categorias',
                placeholder: 'Proponga su categoria'
              },
              specialties: {
                label: 'Proponer especialidades',
                categories: 'Selecione su categoria',
                placeholder: 'Proponga su especialidad'
              },
              modals: {
                error: {
                  title: 'Error',
                  description: 'Hubo un error en su solicitud. Por favor comuniquese con soporte.'
                },
                done: {
                  title: 'Listo!',
                  description: 'Gracias por su propuesta'
                }
              }
            }
          },
          helpers: {
            noSelect: 'No Seleccionado'
          }
        },
        target: {
          title: 'Target/Metas',
          instructions: 'Porfavor describe a tu audiencia',
          form: {
            age: {
              label: 'Edad',
              helper: 'años'
            },
            gender: {
              label: 'Genero',
              values: {
                male: 'Principalmente Mujeres',
                female: 'Principalmente Hombres',
                split: 'Igual entre Hombres & Mujeres'
              }
            },
            nrssg: {
              label: 'Nivel Socioeconómico',
              values: {
                a: 'A',
                b: 'B',
                c1: 'C1',
                c2: 'C2',
                d: 'D',
                e: 'E'
              }
            },
            countries: {
              all: 'Todos',
              label: 'Países'
            },
            cities: {
              all: 'Todas',
              label: 'Ciudades'
            },
            languages: {
              all: 'Todos',
              label: 'Idiomas'
            },
            description: {
              label: 'Descripción del Perfil',
              placeholder: 'Agrega una breve descripción sobre el perfil que consideras tiene esta audiencia.'
            },
            all: 'Todos',
            objectives: {
              increaseFollowers: 'Aumentar tus seguidores',
              increaseViews: 'Aumentar tus visitas',
              increaseShares: 'Aumentar share en tus post',
              increaseEngagement: 'Aumentar tu engagement',
              increaseLikes: 'Aumentar tus likes',
              increaseTrafficHours: 'Aumentar horas de tráfico en tu perfil',
              reachNewMarkets: 'Posicionarte en otras zonas geográficas',
              increaseSpeaking: 'Aumentar el número de gente que habla de ti',
              increasePlays: 'Aumentar reproduccione en tus videos',
              increaseWebsiteTraffic: 'Aumentar el tráfico a tu página web',
              positionTarget: 'Posicionar en tu target',
              keepTarget: 'Mantenimiento de posicionamiento en tu target',
              presence: 'Tener mayor presencia y/o presencia constante con mis seguidores',
              positionNewMarkets: 'Posicionarte en nuevos mercados',
            },
            proposal: {
              objectives: {
                placeholder: 'Sugerir una nueva meta'
              },
              modals: {
                error: {
                  title: 'Error',
                  description: 'Hubo un error en su solicitud. Por favor comuniquese con soporte.'
                },
                done: {
                  title: 'Listo!',
                  description: 'Gracias por su propuesta'
                }
              }
            }
          },
          sections: {
            own: {
              title: 'Audiencia',
              description: 'Por favor, describe el target que deseas'
            },
            target: {
              title: 'Target',
              description: 'Porfavor describe el target que deseas.'
            }
          },
          helpers: {
            noSelect: 'No Seleccionado'
          }
        },
        pricing: {
          title: 'Costo de mis Publicaciones',
          instructions: 'Costo de mis publicaciones',
          form: {
            hour:'Hora sin publicar',
            day:'Día sin publicar',
            values: {
              account: 'Tu cuenta tiene un valor aproximado de:',
              post: 'Tu post tiene un valor aproximado de:'
            },
            post: 'Post',
            profilePicture: 'Foto de Perfil',
            coverPhoto: 'Foto de Portada',
            noPost: {
              hour: 'Hora sin Publicar',
              day: 'Día sin Publicar'
            },
            share: 'Compartir Post',
            partnership: 'Alianza',
            ambassador: 'Embajador de Marca',
            legend: 'Todos los valores estan establecidos en dólares americanos.'
          }
        },
        settings: {
          title: 'Configuraciones',
          instructions: 'Ingresa los siguientes datos.',
          form: {
            name: 'Nombre de la cuenta',
            accountIs: {
              title: '¿Ésta cuenta es?',
              brand: 'Marca',
              influencer: 'Influencer',
              badges: {
                brand: 'M',
                influencer: 'I'
              }
            },
            groups: {
              label: 'Grupos',
              placeholder: 'Agrega TAGS para ordenar tus perfiles y agruparlos.'
            },
            manager: {
              title: 'Administrador Actual',
              youAre: 'Tu eres el administrador actual.',
              edit: 'Editar'
            },
            invite: {
              delete:{
                label: 'Eliminar Cuenta',
              },
              title: 'Delega la administración de este perfil a:',
              send: 'Enviar Invitación',
              placeholder: 'Email',
              success: {
                title: 'Listo!',
                description: 'Tu invitación ha sido enviada',
                confirm: 'Ok'
              },
              error: {
                invalid: 'Dirección de correo inválida',
                failed: 'Falló la invitación',
                self: 'No puedes invitarte a ti mismo'
              },
              sent: {
                label: 'Invitación enviada a',
                delete: {
                  label: 'Borrar Invitación',
                  confirm: {
                    title: 'Estas seguro?',
                    description: 'Esta acción no puede ser revertida.',
                    confirm: 'Si, estoy seguro',
                    cancel: 'Cancelar'
                  }
                },
                status: {
                  pending: 'Pendeinte',
                  sent: 'Enviada',
                  accepted: 'Aceptada',
                  rejected: 'Rechazada'
                },
                error: 'Falla al borrar la invitación',
                success: 'Invitación borrada'
              },
              shares: {
                title: 'Invita a alguien a colaborar en este perfil.',
                current: 'Colaboradores:',
                pending: 'Invitaciones Pendientes',
                form: {
                  title: 'Agregar colaboradores auxiliares para administrar este perfil:'
                }
              }
            },
          },
          delete: {
            label: 'Eliminar Cuenta',
            main: {
              title: '¿Estás seguro?',
              description: 'Esta cuenta será marcada para eliminación después de que uno de nuestros ejecutivos de cuenta se ponga en contacto.',
              confirm: 'Si, eliminar cuenta.',
              cancel: 'Cancelar'
            },
            error: {
              title: 'Error',
              description: 'Hubo un error en su solicitud. Por favor comuniquese con soporte.'
            },
            done: {
              title: 'Listo!',
              description: 'En breve estaremos en contacto.'
            }
          }
        },
        status: {
          title: 'Analíticas',
          soon: {
            title: 'Estamos recopilando tu información.'
          },
          follows: {
            following: 'Siguiendo',
            followers: 'Seguidores',
            profileLikes: 'Likes del Perfil'
          },
          engagement: {
            label: 'Engagement'
          },
          posts: {
            posts: 'Posts',
            postsPerDay: 'Posts por Día'
          },
          likes: {
            likes: 'Likes',
            likesPerPost: 'Likes por Día'
          },
          comments: {
            comments: 'Commentarios',
            commentsPerPost: 'Commentarios por Día'
          },
          retweets: {
            retweets: 'Retweets',
            retweetsPerPost: 'Retweets por Día'
          },
          shares: {
            shares: 'Shares',
            sharesPerPost: 'Shares por Día'
          },
          favorites: {
            favorites: 'Favoritos',
            favoritesPerPost: 'Favoritos por Día'
          }
        },
        summary: {
          title: 'Resumen',
          people: {
            owner: 'Titular',
            manager: 'Administración',
            shares: 'Collaboradores'
          },
          information: {
            information: 'Información',
            profile: 'Perfil',
            campaigns: {
              title: 'No. de Campañas',
              labels: {
                total: 'Total',
                created: 'Creadas',
                partOf: 'Participantes'
              }
            },
            categories: 'Categorías',
            specialty: 'Especialidades',
            groups: 'Groups',
            areas: 'Áreas'
          },
          gallery: {
            images: 'Foto',
            video: 'Video'
          }
        },
        calendar: {
          title: 'Calendario',
          publish: {
            button: 'Programar Publicación'
          },
          filters: {
            all: 'Todas las Publicaciones',
            draft: 'Publicaciones Borradores',
            pending: 'Publicaciones Pendientes',
            sent: 'Publicaciones Enviadas',
            accepted: 'Publicaciones Aceptadas',
            rejected: 'Publicaciones Rechazadas',
            scheduled: 'Publicaciones Programadas',
            published: 'Publicaciones Publicadas',
            completed: 'Publicaciones Completadas',
            cancelled: 'Publicaciones Canceladas',
            suspended: 'Publicaciones Suspendidas'
          }
        }
      },
      saveMessage: 'Publicación Guardada',
      saveButton: 'Guardar'
    },
    menu: 'Perfiles',
    empty: {
      message: 'Aún no tienes cuentas',
      button: 'Añadir Perfil'
    },
    connect: {
      question: '¿Qué red social quieres conectar?',
      message: 'Si deseas agregar una cuenta nueva es necesario cerrar sesion en la red social que quieras conectar',
      account_added: 'Todas las cuentas han sido agregadas',
      notie: {
        error: 'Error al conectar la cuenta.',
        connected: 'Esta cuenta ya ha sido conectada.'
      }
    },
    list: {
      new: 'Añadir Perfil',
      table: {
        headers: {
          edit: 'Editar',
          owner: 'Titular',
          index: 'Nº',
          account: 'Perfiles/Fan Pages',
          license: 'Licencia',
          rating: 'Calificación',
          network: 'Red Social',
          profile: 'Perfiles',
          brand: 'Marca',
          influencer: 'Influencer',
          tags: 'Grupos',
          manager: 'Administrador',
          collaborators: 'Colaboradores',
          campaigns: 'Nº de Campañas'
        },
        search: 'Buscar',
        empty: 'No hay resultados'
      }
    },
    invite: {
      title: 'te ha invitado a administrar esta cuenta.',
      accept: 'Aceptar',
      decline: 'Rechazar',
      error: {
        title: 'Error',
        description: 'Esta invitación esta destinada para otro usuario.'
      }
    }
  },
  zz: {
    edit: {
      tabs: {
        concept: {
          title: '測試',
          instructions: '測試 測試 測試 測試 測試 測試 測試 測試.',
          form: {
            description: '測試 測試 測試 測試 測試 測試/測試/測試',
            occupation: '測試',
            profession: '測試',
            subjects: {
              primary: '測試 測試',
              secondary: '測試 測試',
              forbidden: '測試 測試'
            },
            keywords: '測試',
            likes: '測試 & 測試',
            motivations: '測試'
          }
        },
        gallery: {
          title: '測試',
          newAlbum: {
            title: '測試 測試 測試 測試 測試?',
            confirm: '測試 測試',
            cancel: '測試'
          },
          images: {
            title: '測試',
            empty: {
              message: '測試 測試 測試 測試 測試.',
              button: '測試 測試'
            },
            list: {
              newImage: '測試 測試',
              newAlbum: '測試 測試'
            },
            delete: {
              albumHelper: '測試 測試',
              title: '測試 測試?',
              description: '測試 測試 測試 測試 測試!',
              confirm: '測試, 測試.',
              cancel: '測試'
            }
          },
          videos: {
            title: '測試',
            newAlbum: {
              title: '測試 測試 測試 測試 測試?',
              confirm: '測試 測試',
              cancel: '測試'
            },
            new: {
              title: '測試 測試 測試 測試 測試 測試',
              confirm: '測試 測試',
              cancel: '測試'
            },
            list: {
              newVideo: '測試 測試'
            },
            empty: {
              message: '測試 測試 測試 測試',
              button: '測試 測試'
            },
            delete: {
              title: '測試 測試?',
              description: '測試 測試 測試 測試 測試!',
              confirm: '測試, 測試.',
              cancel: '測試'
            }
          }
        },
        information: {
          title: '測試',
          instructions: '測試 測試 測試 測試 測試 測試 測試 測試.',
          form: {
            name: '測試',
            surname: '測試',
            gender: {
              label: '測試',
              values: {
                male: '測試',
                female: '測試'
              }
            },
            birthDate: '測試',
            maritalStatus: {
              label: '測試',
              values: {
                single: '測試',
                married: '測試'
              }
            },
            forbiddenSubjects: '測試 測試',
            country: '測試',
            city: '測試',
            languages: '測試',
            sexualOrientation: {
              label: '測試',
              values: {
                heterosexual: '測試',
                homosexual: '測試',
                bisexual: '測試',
                transexual: '測試'
              }
            },
            likes: '測試',
            categories: '測試',
            specialties: '測試',
            description: {
              label: '測試',
              description: '測試 測試 測試 測試 測試 測試, 測試 測試 測試.'
            },
            urlTitle: '測試',
            url: '測試',
            proposal: {
              categories: {
                label: '測試 測試',
                placeholder: '測試 測試 測試'
              },
              specialties: {
                label: '測試 測試',
                categories: '測試 測試',
                placeholder: '測試 測試 測試'
              },
              modals: {
                error: {
                  title: '測試',
                  description: '測試 測試 測試 測試 測試 測試 測試. 測試 測試 測試 測試.'
                },
                done: {
                  title: '測試!',
                  description: '測試 測試 測試 測試'
                }
              }
            }
          },
          helpers: {
            noSelect: '測試 測試'
          }
        },
        target: {
          title: '測試/測試',
          instructions: '測試 測試 測試 測試 測試',
          form: {
            age: {
              label: '測試',
              helper: '測試'
            },
            gender: {
              label: '測試',
              values: {
                male: '測試 測試',
                female: '測試 測試',
                split: '測試 測試 測試'
              }
            },
            nrssg: {
              label: '測試 測試',
              values: {
                a: 'A',
                b: 'B',
                c1: 'C1',
                c2: 'C2',
                d: 'D',
                e: 'E'
              }
            },
            countries: {
              label: '測試'
            },
            cities: {
              label: '測試'
            },
            languages: {
              label: '測試'
            },
            description: {
              label: '測試',
              placeholder: '測試 測試 測試 測試 測試 測試 測試 測試 測試 測試.'
            },
            noSelect: '測試',
            objectives: {
              increaseFollowers: '測試 測試',
              increaseViews: '測試 測試',
              increaseShares: '測試 測試 測試',
              increaseEngagement: '測試 測試',
              increaseLikes: '測試 測試',
              increaseTrafficHours: '測試 測試 測試 測試 測試 測試',
              reachNewMarkets: '測試 測試 測試',
              increaseSpeaking: '測試 測試 測試 測試 測試 測試 測試 測試 測試',
              increasePlays: '測試 測試 測試',
              increaseWebsiteTraffic: '測試 測試 測試',
              positionTarget: '測試 測試 測試 測試 測試 測試',
              keepTarget: '測試 測試 測試 測試',
              presence: '測試 測試 測試 測試 測試',
              positionNewMarkets: '測試 測試 測試 測試 測試 測試',
            },
            proposal: {
              objectives: {
                placeholder: '測試 測試 測試 測試'
              },
              modals: {
                error: {
                  title: '測試',
                  description: '測試 測試 測試 測試 測試 測試. 測試 測試 測試 測試 測試.'
                },
                done: {
                  title: '測試!',
                  description: '測試 測試 測試 測試'
                }
              }
            }
          },
          sections: {
            own: {
              title: '測試',
              description: '測試 測試 測試 測試.'
            },
            target: {
              title: '測試',
              description: '測試 測試 測試 測試 測試 測試.'
            }
          },
          helpers: {
            noSelect: '測試 測試'
          }
        },
        pricing: {
          title: '測試',
          instructions: '測試 測試 測試 測試',
          form: {
            values: {
              account: '測試 測試 測試 測試 測試 測試 測試:',
              post: '測試 測試 測試 測試 測試 測試 測試:'
            },
            post: '測試',
            profilePicture: '測試 測試 測試',
            coverPhoto: '測試 測試 測試',
            noPost: {
              hour: '測試 測試 測試',
              day: '測試 測試 測試'
            },
            share: '測試 測試',
            partnership: '測試',
            ambassador: '測試 測試 測試',
            legend: '測試 測試 測試 測試 測試 測試.'
          }
        },
        settings: {
          title: '測試',
          instructions: '測試 測試 測試 測試.',
          form: {
            name: '測試\' 測試',
            accountIs: {
              title: '測試 測試 測試?',
              brand: '測試',
              influencer: '測試',
              badges: {
                brand: '測',
                influencer: '試'
              }
            },
            groups: {
              label: '測試',
              placeholder: '測試 測試 測試 測試 測試 測試 測試 測試 測試.'
            },
            manager: {
              title: '測試 測試',
              youAre: '測試 測試 測試 測試 測試.',
              edit: '測試'
            },
            invite: {
              title: '測試 測試 測試 測試 測試',
              send: '測試 測試',
              placeholder: '測試',
              success: {
                title: '測試!',
                description: '測試 測試 測試 測試 測試',
                confirm: '測試'
              },
              error: {
                invalid: '測試 測試 測試 測試 測試',
                failed: '測試 測試',
                self: '測試 測試 測試'
              },
              sent: {
                label: '測試 測試 測試',
                delete: {
                  label: '測試 測試',
                  confirm: {
                    title: '測試 測試 測試?',
                    description: '測試 測試 測試 測試 測試.',
                    confirm: '測試, 測試 測試',
                    cancel: '測試'
                  }
                },
                status: {
                  pending: '測試',
                  sent: '測試',
                  accepted: '測試',
                  rejected: '測試'
                },
                error: '測試 測試 測試',
                success: '測試 測試'
              },
              shares: {
                title: '測試 測試 測試 測試 測試 測試 測試 測試 測試',
                current: '測試 測試',
                pending: '測試 測試',
                form: {
                  title: '測試 測試 測試 測試 測試 測試 測試:'
                }
              }
            },
            deleteAccount: '測試 測試'
          },
          delete: {
            main: {
              title: '測試 測試 測試?',
              description: '測試 測試 測試 測試 測試 測試 測試 測試 測試\' 測試 測試 測試 測試 測試 測試 測試.',
              confirm: '測試, 測試 測試!',
              cancel: '測試'
            },
            error: {
              title: '測試',
              description: '測試 測試 測試 測試 測試 測試 測試. 測試 測試 測試 測試.'
            },
            done: {
              title: '測試!',
              description: '測試\' 測試 測試 測試.'
            }
          }
        },
        status: {
          title: '測試',
          soon: {
            title: '測試 測試 測試 測試 測試.'
          },
          follows: {
            following: '測試',
            followers: '測試',
            profileLikes: '測試 測試'
          },
          engagement: {
            label: '測試'
          },
          posts: {
            posts: '測試',
            postsPerDay: '測試 測試 測試'
          },
          likes: {
            likes: '測試',
            likesPerPost: '測試 測試 測試'
          },
          comments: {
            comments: '測試',
            commentsPerPost: '測試 測試 測試'
          },
          retweets: {
            retweets: '測試',
            retweetsPerPost: '測試 測試 測試'
          },
          shares: {
            shares: '測試',
            sharesPerPost: '測試 測試 測試'
          },
          favorites: {
            favorites: '測試',
            favoritesPerPost: '測試 測試 測試'
          }
        },
        summary: {
          title: '測試',
          people: {
            owner: '測試',
            manager: '測試',
            shares: '測試'
          },
          information: {
            information: '測試',
            profile: '測試',
            campaigns: {
              title: '測試. 測試 測試',
              labels: {
                total: '測試',
                created: '測試',
                partOf: '測試'
              }
            },
            categories: '測試',
            specialty: '測試',
            groups: '測試',
            areas: '測試'
          },
          gallery: {
            images: '測試',
            video: '測試'
          }
        },
        calendar: {
          title: '測試',
          publish: {
            button: '測試 測試'
          },
          filters: {
            all: '測試',
            draft: '測試',
            pending: '測試',
            sent: '測試',
            accepted: '測試',
            rejected: '測試',
            scheduled: '測試',
            published: '測試',
            completed: '測試',
            cancelled: '測試',
            suspended: '測試'
          }
        }
      },
      saveMessage: '測試 測試',
      saveButton: '測試'
    },
    menu: '測試',
    empty: {
      message: '測試 測試 測試 測試',
      button: '測試 測試'
    },
    list: {
      new: '測試 測試',
      table: {
        headers: {
          edit: '測試',
          owner: '測試',
          index: '測',
          account: '測試',
          license: '測試測試',
          network: '測試 測試',
          profile: '測試 測試',
          rating: '測試 測試',
          brand: '測試',
          influencer: '測試',
          tags: '測試',
          manager: '測試',
          collaborators: '測試',
          campaigns: '測試'
        },
        search: '測試',
        empty: '測試 測試'
      }
    },
    invite: {
      title: '測試 測試 測試 測試 測試 測試 測試.',
      accept: '測試',
      decline: '測試',
      error: {
        title: '測試',
        description: '測試 測試 測試 測試 測試 測試 測試.'
      }
    }
  }
};
