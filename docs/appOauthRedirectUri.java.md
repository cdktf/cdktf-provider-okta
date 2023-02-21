# `appOauthRedirectUri` Submodule <a name="`appOauthRedirectUri` Submodule" id="@cdktf/provider-okta.appOauthRedirectUri"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppOauthRedirectUri <a name="AppOauthRedirectUri" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri okta_app_oauth_redirect_uri}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_redirect_uri.AppOauthRedirectUri;

AppOauthRedirectUri.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .appId(java.lang.String)
    .uri(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#app_id AppOauthRedirectUri#app_id}. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.uri">uri</a></code> | <code>java.lang.String</code> | Redirect URI to append to Okta OIDC application. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#id AppOauthRedirectUri#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.appId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#app_id AppOauthRedirectUri#app_id}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.uri"></a>

- *Type:* java.lang.String

Redirect URI to append to Okta OIDC application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#uri AppOauthRedirectUri#uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#id AppOauthRedirectUri#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_redirect_uri.AppOauthRedirectUri;

AppOauthRedirectUri.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_redirect_uri.AppOauthRedirectUri;

AppOauthRedirectUri.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_redirect_uri.AppOauthRedirectUri;

AppOauthRedirectUri.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.appIdInput">appIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.appId">appId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.appIdInput"></a>

```java
public java.lang.String getAppIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUri.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppOauthRedirectUriConfig <a name="AppOauthRedirectUriConfig" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.app_oauth_redirect_uri.AppOauthRedirectUriConfig;

AppOauthRedirectUriConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .appId(java.lang.String)
    .uri(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.appId">appId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#app_id AppOauthRedirectUri#app_id}. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.uri">uri</a></code> | <code>java.lang.String</code> | Redirect URI to append to Okta OIDC application. |
| <code><a href="#@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#id AppOauthRedirectUri#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.appId"></a>

```java
public java.lang.String getAppId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#app_id AppOauthRedirectUri#app_id}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Redirect URI to append to Okta OIDC application.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#uri AppOauthRedirectUri#uri}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.appOauthRedirectUri.AppOauthRedirectUriConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_oauth_redirect_uri#id AppOauthRedirectUri#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



