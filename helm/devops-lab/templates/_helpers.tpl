{{/*
Expand the chart name.
*/}}
{{- define "devops-lab.name" -}}
{{- .Chart.Name -}}
{{- end }}

{{/*
Create a fully qualified application name.
*/}}
{{- define "devops-lab.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end }}

{{/*
Common labels.
*/}}
{{- define "devops-lab.labels" -}}
app.kubernetes.io/name: {{ include "devops-lab.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version }}
{{- end }}
