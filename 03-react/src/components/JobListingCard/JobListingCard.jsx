import { JobCard } from '../JobCard/JobCard'


export function JobListings ({ jobs }) {

    return (
        <>
            <h2>Resultados de búsqueda</h2>

            <div className='jobs-listings'>
                {
                    jobs.length === 0 && (
                        <p style={{ textAlign: 'center', padding: '1rem', textWrap: 'balance' }}>No se encontraron empleos que cumplan los requisitos de la búsqueda</p>
                    )
                }
                {jobs.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </>
    )
}


