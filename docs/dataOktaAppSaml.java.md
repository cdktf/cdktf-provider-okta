# `dataOktaAppSaml` Submodule <a name="`dataOktaAppSaml` Submodule" id="@cdktf/provider-okta.dataOktaAppSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaAppSaml <a name="DataOktaAppSaml" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml okta_app_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_app_saml.DataOktaAppSaml;

DataOktaAppSaml.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .activeOnly(java.lang.Boolean)
//  .activeOnly(IResolvable)
//  .id(java.lang.String)
//  .label(java.lang.String)
//  .labelPrefix(java.lang.String)
//  .requestCompressed(java.lang.Boolean)
//  .requestCompressed(IResolvable)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.activeOnly">activeOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Search only ACTIVE applications. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Id of application to retrieve, conflicts with label and label_prefix. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | The label of the app to retrieve, conflicts with label_prefix and id. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.labelPrefix">labelPrefix</a></code> | <code>java.lang.String</code> | Label prefix of the app to retrieve, conflicts with label and id. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.requestCompressed">requestCompressed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activeOnly`<sup>Optional</sup> <a name="activeOnly" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.activeOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Search only ACTIVE applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#active_only DataOktaAppSaml#active_only}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Id of application to retrieve, conflicts with label and label_prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#id DataOktaAppSaml#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.label"></a>

- *Type:* java.lang.String

The label of the app to retrieve, conflicts with label_prefix and id.

Label
uses the ?q=<label> query parameter exposed by Okta's API. It should be noted that at this time
this searches both name and label. This is used to avoid paginating through all applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#label DataOktaAppSaml#label}

---

##### `labelPrefix`<sup>Optional</sup> <a name="labelPrefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.labelPrefix"></a>

- *Type:* java.lang.String

Label prefix of the app to retrieve, conflicts with label and id.

This will tell the
provider to do a starts with query as opposed to an equals query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#label_prefix DataOktaAppSaml#label_prefix}

---

##### `requestCompressed`<sup>Optional</sup> <a name="requestCompressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.requestCompressed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#request_compressed DataOktaAppSaml#request_compressed}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.skipGroups"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#skip_groups DataOktaAppSaml#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.skipUsers"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#skip_users DataOktaAppSaml#skip_users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetActiveOnly">resetActiveOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabelPrefix">resetLabelPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetRequestCompressed">resetRequestCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipGroups">resetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipUsers">resetSkipUsers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetActiveOnly` <a name="resetActiveOnly" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetActiveOnly"></a>

```java
public void resetActiveOnly()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetId"></a>

```java
public void resetId()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetLabelPrefix` <a name="resetLabelPrefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabelPrefix"></a>

```java
public void resetLabelPrefix()
```

##### `resetRequestCompressed` <a name="resetRequestCompressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetRequestCompressed"></a>

```java
public void resetRequestCompressed()
```

##### `resetSkipGroups` <a name="resetSkipGroups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipGroups"></a>

```java
public void resetSkipGroups()
```

##### `resetSkipUsers` <a name="resetSkipUsers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipUsers"></a>

```java
public void resetSkipUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaAppSaml resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_app_saml.DataOktaAppSaml;

DataOktaAppSaml.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_app_saml.DataOktaAppSaml;

DataOktaAppSaml.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_app_saml.DataOktaAppSaml;

DataOktaAppSaml.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_app_saml.DataOktaAppSaml;

DataOktaAppSaml.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOktaAppSaml.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOktaAppSaml resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOktaAppSaml to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOktaAppSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaAppSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityErrorRedirectUrl">accessibilityErrorRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityLoginRedirectUrl">accessibilityLoginRedirectUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilitySelfService">accessibilitySelfService</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.acsEndpoints">acsEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.appSettingsJson">appSettingsJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.assertionSigned">assertionSigned</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.attributeStatements">attributeStatements</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList">DataOktaAppSamlAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.audience">audience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.authnContextClassRef">authnContextClassRef</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.autoSubmitToolbar">autoSubmitToolbar</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.defaultRelayState">defaultRelayState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.destination">destination</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.digestAlgorithm">digestAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.features">features</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.groups">groups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideIos">hideIos</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideWeb">hideWeb</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.honorForceAuthn">honorForceAuthn</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idpIssuer">idpIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.inlineHookId">inlineHookId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.links">links</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.recipient">recipient</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.responseSigned">responseSigned</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.samlSignedRequestEnabled">samlSignedRequestEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.signatureAlgorithm">signatureAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutCertificate">singleLogoutCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutIssuer">singleLogoutIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutUrl">singleLogoutUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.spIssuer">spIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.ssoUrl">ssoUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdFormat">subjectNameIdFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdTemplate">subjectNameIdTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplate">userNameTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplatePushStatus">userNameTemplatePushStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateSuffix">userNameTemplateSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateType">userNameTemplateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnlyInput">activeOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefixInput">labelPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressedInput">requestCompressedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroupsInput">skipGroupsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsersInput">skipUsersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnly">activeOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefix">labelPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressed">requestCompressed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `accessibilityErrorRedirectUrl`<sup>Required</sup> <a name="accessibilityErrorRedirectUrl" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityErrorRedirectUrl"></a>

```java
public java.lang.String getAccessibilityErrorRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilityLoginRedirectUrl`<sup>Required</sup> <a name="accessibilityLoginRedirectUrl" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityLoginRedirectUrl"></a>

```java
public java.lang.String getAccessibilityLoginRedirectUrl();
```

- *Type:* java.lang.String

---

##### `accessibilitySelfService`<sup>Required</sup> <a name="accessibilitySelfService" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilitySelfService"></a>

```java
public IResolvable getAccessibilitySelfService();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `acsEndpoints`<sup>Required</sup> <a name="acsEndpoints" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.acsEndpoints"></a>

```java
public java.util.List<java.lang.String> getAcsEndpoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appSettingsJson`<sup>Required</sup> <a name="appSettingsJson" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.appSettingsJson"></a>

```java
public java.lang.String getAppSettingsJson();
```

- *Type:* java.lang.String

---

##### `assertionSigned`<sup>Required</sup> <a name="assertionSigned" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.assertionSigned"></a>

```java
public IResolvable getAssertionSigned();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `attributeStatements`<sup>Required</sup> <a name="attributeStatements" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.attributeStatements"></a>

```java
public DataOktaAppSamlAttributeStatementsList getAttributeStatements();
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList">DataOktaAppSamlAttributeStatementsList</a>

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.audience"></a>

```java
public java.lang.String getAudience();
```

- *Type:* java.lang.String

---

##### `authnContextClassRef`<sup>Required</sup> <a name="authnContextClassRef" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.authnContextClassRef"></a>

```java
public java.lang.String getAuthnContextClassRef();
```

- *Type:* java.lang.String

---

##### `autoSubmitToolbar`<sup>Required</sup> <a name="autoSubmitToolbar" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.autoSubmitToolbar"></a>

```java
public IResolvable getAutoSubmitToolbar();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `defaultRelayState`<sup>Required</sup> <a name="defaultRelayState" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.defaultRelayState"></a>

```java
public java.lang.String getDefaultRelayState();
```

- *Type:* java.lang.String

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.destination"></a>

```java
public java.lang.String getDestination();
```

- *Type:* java.lang.String

---

##### `digestAlgorithm`<sup>Required</sup> <a name="digestAlgorithm" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.digestAlgorithm"></a>

```java
public java.lang.String getDigestAlgorithm();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.features"></a>

```java
public java.util.List<java.lang.String> getFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.groups"></a>

```java
public java.util.List<java.lang.String> getGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hideIos`<sup>Required</sup> <a name="hideIos" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideIos"></a>

```java
public IResolvable getHideIos();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `hideWeb`<sup>Required</sup> <a name="hideWeb" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideWeb"></a>

```java
public IResolvable getHideWeb();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `honorForceAuthn`<sup>Required</sup> <a name="honorForceAuthn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.honorForceAuthn"></a>

```java
public IResolvable getHonorForceAuthn();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `idpIssuer`<sup>Required</sup> <a name="idpIssuer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idpIssuer"></a>

```java
public java.lang.String getIdpIssuer();
```

- *Type:* java.lang.String

---

##### `inlineHookId`<sup>Required</sup> <a name="inlineHookId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.inlineHookId"></a>

```java
public java.lang.String getInlineHookId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.links"></a>

```java
public java.lang.String getLinks();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `recipient`<sup>Required</sup> <a name="recipient" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.recipient"></a>

```java
public java.lang.String getRecipient();
```

- *Type:* java.lang.String

---

##### `responseSigned`<sup>Required</sup> <a name="responseSigned" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.responseSigned"></a>

```java
public IResolvable getResponseSigned();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `samlSignedRequestEnabled`<sup>Required</sup> <a name="samlSignedRequestEnabled" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.samlSignedRequestEnabled"></a>

```java
public IResolvable getSamlSignedRequestEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `signatureAlgorithm`<sup>Required</sup> <a name="signatureAlgorithm" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.signatureAlgorithm"></a>

```java
public java.lang.String getSignatureAlgorithm();
```

- *Type:* java.lang.String

---

##### `singleLogoutCertificate`<sup>Required</sup> <a name="singleLogoutCertificate" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutCertificate"></a>

```java
public java.lang.String getSingleLogoutCertificate();
```

- *Type:* java.lang.String

---

##### `singleLogoutIssuer`<sup>Required</sup> <a name="singleLogoutIssuer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutIssuer"></a>

```java
public java.lang.String getSingleLogoutIssuer();
```

- *Type:* java.lang.String

---

##### `singleLogoutUrl`<sup>Required</sup> <a name="singleLogoutUrl" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutUrl"></a>

```java
public java.lang.String getSingleLogoutUrl();
```

- *Type:* java.lang.String

---

##### `spIssuer`<sup>Required</sup> <a name="spIssuer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.spIssuer"></a>

```java
public java.lang.String getSpIssuer();
```

- *Type:* java.lang.String

---

##### `ssoUrl`<sup>Required</sup> <a name="ssoUrl" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.ssoUrl"></a>

```java
public java.lang.String getSsoUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `subjectNameIdFormat`<sup>Required</sup> <a name="subjectNameIdFormat" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdFormat"></a>

```java
public java.lang.String getSubjectNameIdFormat();
```

- *Type:* java.lang.String

---

##### `subjectNameIdTemplate`<sup>Required</sup> <a name="subjectNameIdTemplate" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdTemplate"></a>

```java
public java.lang.String getSubjectNameIdTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplate`<sup>Required</sup> <a name="userNameTemplate" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplate"></a>

```java
public java.lang.String getUserNameTemplate();
```

- *Type:* java.lang.String

---

##### `userNameTemplatePushStatus`<sup>Required</sup> <a name="userNameTemplatePushStatus" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplatePushStatus"></a>

```java
public java.lang.String getUserNameTemplatePushStatus();
```

- *Type:* java.lang.String

---

##### `userNameTemplateSuffix`<sup>Required</sup> <a name="userNameTemplateSuffix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateSuffix"></a>

```java
public java.lang.String getUserNameTemplateSuffix();
```

- *Type:* java.lang.String

---

##### `userNameTemplateType`<sup>Required</sup> <a name="userNameTemplateType" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateType"></a>

```java
public java.lang.String getUserNameTemplateType();
```

- *Type:* java.lang.String

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `activeOnlyInput`<sup>Optional</sup> <a name="activeOnlyInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnlyInput"></a>

```java
public java.lang.Object getActiveOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `labelPrefixInput`<sup>Optional</sup> <a name="labelPrefixInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefixInput"></a>

```java
public java.lang.String getLabelPrefixInput();
```

- *Type:* java.lang.String

---

##### `requestCompressedInput`<sup>Optional</sup> <a name="requestCompressedInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressedInput"></a>

```java
public java.lang.Object getRequestCompressedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipGroupsInput`<sup>Optional</sup> <a name="skipGroupsInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroupsInput"></a>

```java
public java.lang.Object getSkipGroupsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsersInput`<sup>Optional</sup> <a name="skipUsersInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsersInput"></a>

```java
public java.lang.Object getSkipUsersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `activeOnly`<sup>Required</sup> <a name="activeOnly" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnly"></a>

```java
public java.lang.Object getActiveOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `labelPrefix`<sup>Required</sup> <a name="labelPrefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefix"></a>

```java
public java.lang.String getLabelPrefix();
```

- *Type:* java.lang.String

---

##### `requestCompressed`<sup>Required</sup> <a name="requestCompressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressed"></a>

```java
public java.lang.Object getRequestCompressed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipGroups`<sup>Required</sup> <a name="skipGroups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipUsers`<sup>Required</sup> <a name="skipUsers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaAppSamlAttributeStatements <a name="DataOktaAppSamlAttributeStatements" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_app_saml.DataOktaAppSamlAttributeStatements;

DataOktaAppSamlAttributeStatements.builder()
    .build();
```


### DataOktaAppSamlConfig <a name="DataOktaAppSamlConfig" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_app_saml.DataOktaAppSamlConfig;

DataOktaAppSamlConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .activeOnly(java.lang.Boolean)
//  .activeOnly(IResolvable)
//  .id(java.lang.String)
//  .label(java.lang.String)
//  .labelPrefix(java.lang.String)
//  .requestCompressed(java.lang.Boolean)
//  .requestCompressed(IResolvable)
//  .skipGroups(java.lang.Boolean)
//  .skipGroups(IResolvable)
//  .skipUsers(java.lang.Boolean)
//  .skipUsers(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.activeOnly">activeOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Search only ACTIVE applications. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.id">id</a></code> | <code>java.lang.String</code> | Id of application to retrieve, conflicts with label and label_prefix. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.label">label</a></code> | <code>java.lang.String</code> | The label of the app to retrieve, conflicts with label_prefix and id. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.labelPrefix">labelPrefix</a></code> | <code>java.lang.String</code> | Label prefix of the app to retrieve, conflicts with label and id. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.requestCompressed">requestCompressed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipGroups">skipGroups</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipUsers">skipUsers</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `activeOnly`<sup>Optional</sup> <a name="activeOnly" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.activeOnly"></a>

```java
public java.lang.Object getActiveOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Search only ACTIVE applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#active_only DataOktaAppSaml#active_only}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Id of application to retrieve, conflicts with label and label_prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#id DataOktaAppSaml#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

The label of the app to retrieve, conflicts with label_prefix and id.

Label
uses the ?q=<label> query parameter exposed by Okta's API. It should be noted that at this time
this searches both name and label. This is used to avoid paginating through all applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#label DataOktaAppSaml#label}

---

##### `labelPrefix`<sup>Optional</sup> <a name="labelPrefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.labelPrefix"></a>

```java
public java.lang.String getLabelPrefix();
```

- *Type:* java.lang.String

Label prefix of the app to retrieve, conflicts with label and id.

This will tell the
provider to do a starts with query as opposed to an equals query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#label_prefix DataOktaAppSaml#label_prefix}

---

##### `requestCompressed`<sup>Optional</sup> <a name="requestCompressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.requestCompressed"></a>

```java
public java.lang.Object getRequestCompressed();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#request_compressed DataOktaAppSaml#request_compressed}

---

##### `skipGroups`<sup>Optional</sup> <a name="skipGroups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipGroups"></a>

```java
public java.lang.Object getSkipGroups();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#skip_groups DataOktaAppSaml#skip_groups}

---

##### `skipUsers`<sup>Optional</sup> <a name="skipUsers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipUsers"></a>

```java
public java.lang.Object getSkipUsers();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.11.0/docs/data-sources/app_saml#skip_users DataOktaAppSaml#skip_users}

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaAppSamlAttributeStatementsList <a name="DataOktaAppSamlAttributeStatementsList" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_app_saml.DataOktaAppSamlAttributeStatementsList;

new DataOktaAppSamlAttributeStatementsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.get"></a>

```java
public DataOktaAppSamlAttributeStatementsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOktaAppSamlAttributeStatementsOutputReference <a name="DataOktaAppSamlAttributeStatementsOutputReference" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.data_okta_app_saml.DataOktaAppSamlAttributeStatementsOutputReference;

new DataOktaAppSamlAttributeStatementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterValue">filterValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements">DataOktaAppSamlAttributeStatements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `filterValue`<sup>Required</sup> <a name="filterValue" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterValue"></a>

```java
public java.lang.String getFilterValue();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.internalValue"></a>

```java
public DataOktaAppSamlAttributeStatements getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements">DataOktaAppSamlAttributeStatements</a>

---



