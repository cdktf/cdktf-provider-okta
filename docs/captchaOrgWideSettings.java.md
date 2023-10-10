# `okta_captcha_org_wide_settings`

Refer to the Terraform Registory for docs: [`okta_captcha_org_wide_settings`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/captcha_org_wide_settings).

# `captchaOrgWideSettings` Submodule <a name="`captchaOrgWideSettings` Submodule" id="@cdktf/provider-okta.captchaOrgWideSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CaptchaOrgWideSettings <a name="CaptchaOrgWideSettings" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/captcha_org_wide_settings okta_captcha_org_wide_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.captcha_org_wide_settings.CaptchaOrgWideSettings;

CaptchaOrgWideSettings.Builder.create(Construct scope, java.lang.String id)
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
//  .captchaId(java.lang.String)
//  .enabledFor(java.util.List<java.lang.String>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.captchaId">captchaId</a></code> | <code>java.lang.String</code> | ID of the CAPTCHA. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.enabledFor">enabledFor</a></code> | <code>java.util.List<java.lang.String></code> | Set of pages that have CAPTCHA enabled. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `captchaId`<sup>Optional</sup> <a name="captchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.captchaId"></a>

- *Type:* java.lang.String

ID of the CAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/captcha_org_wide_settings#captcha_id CaptchaOrgWideSettings#captcha_id}

---

##### `enabledFor`<sup>Optional</sup> <a name="enabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.enabledFor"></a>

- *Type:* java.util.List<java.lang.String>

Set of pages that have CAPTCHA enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/captcha_org_wide_settings#enabled_for CaptchaOrgWideSettings#enabled_for}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetCaptchaId">resetCaptchaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetEnabledFor">resetEnabledFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCaptchaId` <a name="resetCaptchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetCaptchaId"></a>

```java
public void resetCaptchaId()
```

##### `resetEnabledFor` <a name="resetEnabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetEnabledFor"></a>

```java
public void resetEnabledFor()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.captcha_org_wide_settings.CaptchaOrgWideSettings;

CaptchaOrgWideSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.captcha_org_wide_settings.CaptchaOrgWideSettings;

CaptchaOrgWideSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.captcha_org_wide_settings.CaptchaOrgWideSettings;

CaptchaOrgWideSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaIdInput">captchaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledForInput">enabledForInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaId">captchaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledFor">enabledFor</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `captchaIdInput`<sup>Optional</sup> <a name="captchaIdInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaIdInput"></a>

```java
public java.lang.String getCaptchaIdInput();
```

- *Type:* java.lang.String

---

##### `enabledForInput`<sup>Optional</sup> <a name="enabledForInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledForInput"></a>

```java
public java.util.List<java.lang.String> getEnabledForInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `captchaId`<sup>Required</sup> <a name="captchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaId"></a>

```java
public java.lang.String getCaptchaId();
```

- *Type:* java.lang.String

---

##### `enabledFor`<sup>Required</sup> <a name="enabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledFor"></a>

```java
public java.util.List<java.lang.String> getEnabledFor();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CaptchaOrgWideSettingsConfig <a name="CaptchaOrgWideSettingsConfig" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.captcha_org_wide_settings.CaptchaOrgWideSettingsConfig;

CaptchaOrgWideSettingsConfig.builder()
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
//  .captchaId(java.lang.String)
//  .enabledFor(java.util.List<java.lang.String>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.captchaId">captchaId</a></code> | <code>java.lang.String</code> | ID of the CAPTCHA. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.enabledFor">enabledFor</a></code> | <code>java.util.List<java.lang.String></code> | Set of pages that have CAPTCHA enabled. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `captchaId`<sup>Optional</sup> <a name="captchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.captchaId"></a>

```java
public java.lang.String getCaptchaId();
```

- *Type:* java.lang.String

ID of the CAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/captcha_org_wide_settings#captcha_id CaptchaOrgWideSettings#captcha_id}

---

##### `enabledFor`<sup>Optional</sup> <a name="enabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.enabledFor"></a>

```java
public java.util.List<java.lang.String> getEnabledFor();
```

- *Type:* java.util.List<java.lang.String>

Set of pages that have CAPTCHA enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/captcha_org_wide_settings#enabled_for CaptchaOrgWideSettings#enabled_for}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/resources/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



